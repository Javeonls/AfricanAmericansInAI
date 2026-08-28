# African Americans in AI

![African Americans in AI Logo](https://via.placeholder.com/1200x600/0f0f0f/ffffff?text=African+Americans+in+AI+Project+Visualization)

## 🚀 Project Overview

"African Americans in AI" is a static website that documents and celebrates the contributions of African American leaders in artificial intelligence and computing. This project serves as both an educational resource and a call to action for greater diversity in the tech industry.

### 📊 Key Features

- **Pioneers Directory**: A searchable and filterable grid of verified African American contributors to AI and computing
- **Data & Insights Charts**: Interactive visualizations showing representation trends, company breakdowns, pay equity, and geographic distribution
- **Nomination Form**: Allow visitors to submit nominations for additional pioneers
- **Case Study Section**: Explains the project's methodology and importance
- **Automated Data Updates**: GitHub Actions workflow updates data timestamps monthly

### 📌 Project Overview Document

For a detailed explanation of the project's purpose, methodology, and technical implementation, please see the [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) document.

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Charting**: Chart.js
- **Hosting**: GitHub Pages
- **Data Storage**: JSON files
- **Automation**: GitHub Actions

## 📚 How to Use This Project

### Viewing the Site

The live site is hosted at [https://javeonls.github.io/AfricanAmericansInAI/](https://javeonls.github.io/AfricanAmericansInAI/)

### Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/javeonls/AfricanAmericansInAI.git
   ```

2. Navigate to the project directory:
   ```bash
   cd AfricanAmericansInAI
   ```

3. Open the index.html file in your browser:
   ```bash
   open index.html
   ```

### Running the Data Update Script

To update the data timestamps:

1. Navigate to the scripts directory:
   ```bash
   cd scripts
   ```

2. Run the Python script:
   ```bash
   python update-data.py
   ```

## 🛠️ Technical Implementation

### Data Visualization

The project uses Chart.js for creating interactive data visualizations without requiring a backend server. Each chart is rendered client-side when the page loads, using data fetched from the JSON file:

- **Representation in AI Roles**: Line chart showing trends over time
- **Company Breakdown**: Bar chart comparing representation across companies
- **Pay Equity**: Bar chart comparing salary disparities
- **Geographic Distribution**: Bar chart showing regional concentration

### Data Management

All chart data is stored in a JSON file (`data/ai_diversity_data.json`) that includes:
- Actual values for each dataset
- Source citations for transparency
- Last updated timestamps for data currency

### Automated Updates

A GitHub Actions workflow runs monthly to update the last updated timestamps in the data file, ensuring visitors can see when the data was last refreshed.

### Accessibility

The site maintains high accessibility standards:
- Semantic HTML structure
- ARIA labels for interactive elements
- Descriptive alt text for all images
- Keyboard navigation support

### Frontend Framework

The project uses:
- HTML5 for structure
- CSS3 for styling
- JavaScript for interactivity

### Static Site Hosting

The site is hosted on GitHub Pages, which provides free static website hosting directly from a GitHub repository. This choice was made to ensure the project is accessible, low-cost, and easy to maintain.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📋 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📊 Data Sources

All data visualizations include source citations. For more information on the data sources, please see the [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) document.

## 📸 Image Credits

All portraits of real people in the Pioneers section use real, properly licensed photographs from Wikimedia Commons and NASA's public domain archives. Each image includes a visible credit line with the source and license.

## 🔍 Accessibility

This site is designed with accessibility in mind. All images include descriptive alt text, and the site follows semantic HTML practices. For more information on accessibility features, please see the [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) document.