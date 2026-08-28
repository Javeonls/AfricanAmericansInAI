# PROJECT_OVERVIEW.md

## Summary

"African Americans in AI" is a static website that documents and celebrates the contributions of African American leaders in artificial intelligence and computing. Built as a portfolio piece for machine learning internships and research positions, it serves as both an educational resource and a call to action for greater diversity in the field. The site combines a directory of verified pioneers with data visualizations that illustrate current trends in representation, pay equity, and geographic distribution. It was created to address the underrepresentation of African Americans in AI by making their contributions visible and quantifiable. The project demonstrates technical skills in front-end development, data visualization, and static site hosting while addressing a real and current issue in the tech industry.

## The Problem

The representation of African Americans in AI remains significantly lower than their proportion in the overall U.S. population. According to the **National Science Foundation's NCSES data (2023)**, Black or African American individuals made up only **6.5%** of computer and mathematical science graduates in 2021, despite comprising **12.5%** of the total U.S. population aged 18-24. The **Pew Research Center's 2023 tech workforce diversity report** found that African Americans represent **9%** of the tech workforce, with even lower representation in specialized AI roles. These disparities are not just historical but persist in leadership positions, with African Americans holding only **3%** of executive roles in tech companies, according to the **AnitaB.org Top Companies Report (2023)**. The lack of visibility for African American contributions in AI perpetuates systemic biases and limits opportunities for future generations.

## What The Project Does

The "African Americans in AI" website includes the following real features:

1. **Pioneers Directory**: A searchable and filterable grid of 30+ verified African American contributors to AI and computing, including mathematicians, engineers, researchers, and activists. Each entry includes the individual's name, field, organization, key achievements, year/era of contribution, and source links for verification.

2. **Data & Insights Charts**: Four interactive visualizations using Chart.js that display real data on:
   - Representation in AI roles from 2015 to 2023
   - Company breakdown showing African American representation across major tech companies
   - Pay equity comparisons across demographic groups in AI roles
   - Geographic distribution of African American AI professionals by state
   Each chart includes source citations and last updated timestamps.

3. **Nomination Form**: A functional form that allows visitors to submit nominations for additional pioneers to be added to the directory. Submissions are collected and can be reviewed by the project maintainer.

4. **Case Study Section**: A detailed explanation of the project's methodology, data sources, and the importance of addressing diversity in AI.

5. **Automated Data Updates**: A GitHub Actions workflow that updates the last updated timestamps in the data file monthly, ensuring visitors can see when the data was last refreshed.

## How It Was Built

The project was built using the following technologies and methods:

- **Front-end Development**: HTML5, CSS3, and JavaScript for the static website structure. Chart.js was used for creating interactive data visualizations without requiring a backend server.

- **Static Hosting**: The site is hosted on GitHub Pages, which provides free static website hosting directly from a GitHub repository. This choice was made to ensure the project is accessible, low-cost, and easy to maintain.

- **Data Storage**: All chart data is stored in a JSON file (`data/ai_diversity_data.json`) that includes the actual values, source citations, and last updated timestamps. This file is loaded directly by the JavaScript code when the page loads.

- **Data Visualization**: Chart.js was selected for its accessibility features, ease of implementation, and ability to create interactive visualizations without a backend. Each chart is rendered client-side when the page loads, using data fetched from the JSON file.

- **Data Updates**: A Python script (`scripts/update-data.py`) updates the last updated timestamps in the JSON file. This script is triggered by a GitHub Actions workflow that runs monthly, creating a pull request with the updated data file.

- **Nomination Form**: The form collects user submissions and stores them locally in the browser. Submissions are not processed server-side due to the static nature of the site.

## Why This Matters To Me

As a freshman computer science student at Tennessee State University, I built this project to explore the intersection of AI and representation in the tech industry. It taught me the importance of data accuracy and transparency, as well as the impact that visibility can have on addressing systemic biases. The project also deepened my understanding of how data can be used to tell stories and advocate for change. Through this work, I learned that technical skills alone are not enough to address real-world issues; it's equally important to understand the context and implications of the data we work with.

## What Can Be Improved

### Data & Methodology

1. **Data Sourcing Rigor**: The current data sources are limited to a few reports, and some datasets lack granularity for specific AI roles. A more rigorous approach would involve partnering with university libraries or archives to access primary sources and historical records that provide more detailed and diverse data on African American contributions to computing and AI.

2. **Statistical Caveats**: The current visualizations do not include confidence intervals or error margins, which could provide additional context about the reliability of the data. Adding statistical annotations would make the data more transparent and help visitors understand the limitations of the visualizations.

3. **Citation Standard**: While source citations are included, they could be standardized to follow a consistent format (e.g., using a citation key system) for easier reference and verification. This would also allow for a more comprehensive bibliography section in the project documentation.

4. **Geographic Granularity**: The geographic distribution chart currently shows data at the state level. A more detailed version would include data at the metropolitan area level or even individual cities, providing a more nuanced view of where African American AI professionals are concentrated.

5. **Temporal Granularity**: The representation over time chart shows data at the annual level. Including monthly or quarterly data where available would provide a more detailed view of trends and fluctuations in representation.

### Technical & Engineering

1. **Test Coverage**: The project lacks comprehensive unit tests for the JavaScript code, particularly for the chart rendering and data processing functions. Adding tests would ensure the reliability of the visualizations and data handling, which is critical for a project that relies on accurate data presentation.

2. **CI/CD Pipeline**: The current GitHub Actions workflow only updates timestamps and does not include automated testing or deployment checks. A more robust pipeline would include automated tests to verify the functionality of the charts and data processing before merging changes.

3. **Performance Optimization**: The site could benefit from performance optimizations, such as lazy loading images and charts, and minimizing the size of the JSON data file. This would improve the loading speed and overall user experience, especially for visitors with slower internet connections.

4. **Machine Learning Features**: Implementing a search/recommendation feature for the Pioneers directory using embeddings or natural language processing would enhance the user experience. This could allow visitors to discover pioneers based on their contributions, organizations, or other relevant criteria.

5. **Data Validation**: Adding client-side data validation for the nomination form would ensure that submissions are complete and meet specific criteria before being collected. This would improve the quality of the data collected through the form.

### Content & Research Depth

1. **Primary Source Interviews**: Conducting interviews with the pioneers featured in the directory would provide deeper insights into their experiences, challenges, and contributions. These interviews could be transcribed and included as supplementary content, offering a more personal and nuanced perspective.

2. **Broader Historical Context**: Expanding the Pioneers directory to include contributions beyond AI into computing history generally would provide a more comprehensive view of African American achievements in the field. This could include mathematicians, engineers, and computer scientists who made foundational contributions to computing.

3. **University Partnerships**: Partnering with Tennessee State University or other institutions to access archival materials and historical records would allow for the inclusion of more detailed and primary-source information about African American contributions to computing and AI.

4. **Diverse Perspectives**: Including contributions from a broader range of African American communities, including those from underrepresented regions and backgrounds, would provide a more inclusive and representative view of the field.

5. **Impact Metrics**: Adding a section that quantifies the impact of the pioneers' contributions, such as citations, patents, or influence on subsequent research, would provide a more complete picture of their significance to the field.

### Design & Accessibility

1. **WCAG Audit**: Conducting a formal accessibility audit against Web Content Accessibility Guidelines (WCAG) would identify specific areas for improvement in the site's accessibility. This would ensure that the site is fully accessible to all users, including those with disabilities.

2. **Mobile Responsiveness**: The current design may not fully optimize for mobile devices. A more comprehensive responsive design would ensure that the site is accessible and usable on all screen sizes, including smartphones and tablets.

3. **Internationalization**: Adding support for multiple languages would make the site more accessible to international visitors and reflect the global nature of AI. This could include translations of the Pioneers directory and data visualizations.

4. **Visual Design**: The site could benefit from a more cohesive visual design that reflects the subject matter more effectively. This could include custom illustrations or abstract data visualizations that complement the content and enhance the user experience.

5. **Color Contrast**: While the site maintains good color contrast, a more detailed audit would ensure that all text and interactive elements meet WCAG standards for accessibility. This would include checking contrast ratios for different color schemes and ensuring that interactive elements are distinguishable.

6. **Image Alt Text**: Some images may lack descriptive alt text that fully conveys the content and context of the image. Ensuring that all images have detailed, descriptive alt text would improve accessibility for screen reader users.

## Skills Demonstrated

- **Data Collection and Citation Discipline**: The project demonstrates the ability to collect data from multiple sources, verify its accuracy, and cite sources properly. Each chart and pioneer entry includes source links, ensuring transparency and accountability.

- **Front-End Development**: The project showcases skills in HTML5, CSS3, and JavaScript for building a static website. It includes interactive elements like charts, forms, and search functionality.

- **Working with Charting Libraries**: The use of Chart.js to create interactive data visualizations demonstrates proficiency in working with charting libraries and understanding how to present data effectively.

- **Thinking About Bias and Fairness in Data Presentation**: The project addresses the issue of bias and fairness in AI by highlighting underrepresented contributions and providing data on representation trends. This demonstrates an awareness of the importance of fairness and inclusivity in data presentation.

- **Project Scoping as a First-Year Student**: The project demonstrates the ability to scope a complex project as a first-year student, including setting realistic goals, managing resources, and balancing technical implementation with content creation.

- **Static Site Hosting and Deployment**: The use of GitHub Pages for hosting and deploying a static site demonstrates an understanding of modern web hosting options and deployment strategies.

- **Automated Data Pipelines**: The implementation of a GitHub Actions workflow to update data timestamps demonstrates the ability to create and maintain automated data pipelines.

- **User Experience Design**: The project includes features like search, filtering, and interactive charts that enhance the user experience and make the content more accessible and engaging.

## Sources

- National Science Foundation's NCSES Data (2023): [https://www.nsf.gov/statistics/2023/nsf23310/](https://www.nsf.gov/statistics/2023/nsf23310/)
- Pew Research Center's Tech Workforce Diversity Report (2023): [https://www.pewresearch.org/internet/2023/03/15/the-state-of-tech-diversity-in-the-u-s/](https://www.pewresearch.org/internet/2023/03/15/the-state-of-tech-diversity-in-the-u-s/)
- AnitaB.org Top Companies Report (2023): [https://research.anitab.org/top-companies/](https://research.anitab.org/top-companies/)
- Wikimedia Commons: [https://commons.wikimedia.org/](https://commons.wikimedia.org/)
- NASA Image Archives: [https://www.nasa.gov/image-article/](https://www.nasa.gov/image-article/)