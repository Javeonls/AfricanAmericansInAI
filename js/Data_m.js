document.addEventListener("DOMContentLoaded", () => {
    // Accessible colorblind-safe palette (Okabe-Ito)
    const COLORS = {
        primary: "#56B4E9", // Sky Blue
        area: "rgba(86, 180, 233, 0.2)",
        positive: "#009E73", // Bluish Green (above parity)
        negative: "#D55E00"  // Vermillion (below parity)
    };

    const tooltip = d3.select("#d3-tooltip");

    const initDataInsights = async () => {
        try {
            const response = await fetch('data/ai_diversity_data.json');
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
            const data = await response.json();
            document.getElementById("data-timestamp").textContent = `Last updated: ${data.last_updated}`;
            
            // Generate fallback data tables for screen readers
            generateAccessibleTable("table-time", data.representation_over_time, ["Year", "Percent", "Source"]);
            generateAccessibleTable("table-equity", data.pay_equity, ["Role", "Value vs Parity", "Source"]);

            // Setup Intersection Observer for lazy animation
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'chart-time') drawTimeChart(data.representation_over_time, '#chart-time');
                        if (entry.target.id === 'chart-equity') drawEquityChart(data.pay_equity, '#chart-equity');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            document.querySelectorAll('.d3-wrapper').forEach(el => observer.observe(el));

        } catch (error) {
            console.error("Data Rigor Check: Failed to load chart data.", error);
            document.getElementById("insights-error").style.display = "block";
        }
    };

    const drawTimeChart = (data, selector) => {
        const container = d3.select(selector);
        const width = container.node().getBoundingClientRect().width;
        const height = 350;
        const margin = { top: 20, right: 30, bottom: 40, left: 50 };

        const svg = container.append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .style("overflow", "visible");

        const x = d3.scaleLinear()
            .domain(d3.extent(data, d => d.year))
            .range([margin.left, width - margin.right]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.percent) * 1.2]) // Add 20% headroom
            .range([height - margin.bottom, margin.top]);

        // Honest data gaps: line breaks if data is null/undefined
        const line = d3.line()
            .defined(d => d.percent !== null && !isNaN(d.percent))
            .x(d => x(d.year))
            .y(d => y(d.percent))
            .curve(d3.curveMonotoneX);

        const area = d3.area()
            .defined(d => d.percent !== null && !isNaN(d.percent))
            .x(d => x(d.year))
            .y0(y(0))
            .y1(d => y(d.percent))
            .curve(d3.curveMonotoneX);

        // Axes
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(d3.format("d")).ticks(data.length))
            .attr("class", "axis-text");

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(5).tickFormat(d => `${d}%`))
            .attr("class", "axis-text");

        // Grid lines
        svg.append("g")
            .attr("class", "grid-line")
            .selectAll("line")
            .data(y.ticks(5))
            .join("line")
            .attr("x1", margin.left)
            .attr("x2", width - margin.right)
            .attr("y1", d => y(d))
            .attr("y2", d => y(d));

        // Draw Area
        const areaPath = svg.append("path")
            .datum(data)
            .attr("fill", COLORS.area)
            .attr("d", area)
            .attr("opacity", 0);

        areaPath.transition().duration(1500).attr("opacity", 1);

        // Draw Line with stroke animation
        const path = svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", COLORS.primary)
            .attr("stroke-width", 3)
            .attr("d", line);

        const totalLength = path.node().getTotalLength();

        path.attr("stroke-dasharray", `${totalLength} ${totalLength}`)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(2000)
            .ease(d3.easeCubicInOut)
            .attr("stroke-dashoffset", 0);

        // Interactive Dots
        svg.selectAll(".dot")
            .data(data.filter(d => d.percent !== null))
            .join("circle")
            .attr("class", "dot")
            .attr("cx", d => x(d.year))
            .attr("cy", d => y(d.percent))
            .attr("r", 5)
            .attr("fill", COLORS.primary)
            .attr("opacity", 0)
            .on("mouseover", (event, d) => showTooltip(event, `<strong>${d.year}:</strong> ${d.percent}%`, d.source))
            .on("mouseout", hideTooltip)
            .transition()
            .delay(2000)
            .duration(500)
            .attr("opacity", 1);
    };

    const drawEquityChart = (data, selector) => {
        const container = d3.select(selector);
        const width = container.node().getBoundingClientRect().width;
        const height = 350;
        const margin = { top: 20, right: 30, bottom: 40, left: 120 };

        const svg = container.append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`);

        const y = d3.scaleBand()
            .domain(data.map(d => d.role))
            .range([margin.top, height - margin.bottom])
            .padding(0.2);

        const maxVal = d3.max(data, d => Math.abs(d.value));
        const x = d3.scaleLinear()
            .domain([-maxVal, maxVal])
            .range([margin.left, width - margin.right]);

        // Axes
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(5).tickFormat(d => d > 0 ? `+${d}%` : `${d}%`))
            .attr("class", "axis-text");

        svg.append("g")
            .attr("transform", `translate(${x(0)},0)`)
            .call(d3.axisLeft(y).tickSize(0).tickPadding(x(0) - margin.left + 10))
            .attr("class", "axis-text");

        // Center Parity Line
        svg.append("line")
            .attr("x1", x(0))
            .attr("x2", x(0))
            .attr("y1", margin.top)
            .attr("y2", height - margin.bottom)
            .attr("stroke", "#94a3b8")
            .attr("stroke-width", 2);

        // Draw Bars
        svg.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("y", d => y(d.role))
            .attr("height", y.bandwidth())
            .attr("x", x(0))
            .attr("width", 0)
            .attr("fill", d => d.value < 0 ? COLORS.negative : COLORS.positive)
            .on("mouseover", (event, d) => {
                const diff = d.value > 0 ? `+${d.value}% above parity` : `${d.value}% below parity`;
                showTooltip(event, `<strong>${d.role}:</strong><br>${diff}`, d.source);
            })
            .on("mouseout", hideTooltip)
            .transition()
            .duration(1500)
            .ease(d3.easeCubicOut)
            .attr("x", d => Math.min(x(0), x(d.value)))
            .attr("width", d => Math.abs(x(d.value) - x(0)));
    };

    const showTooltip = (event, content, source) => {
        tooltip.html(`${content}<span class="tooltip-source">Source: ${source}</span>`)
            .style("left", `${event.pageX + 15}px`)
            .style("top", `${event.pageY - 20}px`)
            .style("opacity", 1);
    };

    const hideTooltip = () => tooltip.style("opacity", 0);

    const generateAccessibleTable = (containerId, data, headers) => {
        if (!data || data.length === 0) return;
        const html = `
            <table>
                <caption>Accessible data table for chart</caption>
                <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                <tbody>
                    ${data.map(row => `<tr>${Object.values(row).map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}
                </tbody>
            </table>
        `;
        document.getElementById(containerId).innerHTML = html;
    };

    initDataInsights();
});