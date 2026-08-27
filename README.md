# African Americans in AI

A **visually stunning** and **data-driven** project celebrating the contributions of African Americans in artificial intelligence. This initiative transforms raw data into **engaging visuals** and **interactive tools** to highlight diversity trends, accessibility, and opportunities in AI.

## 🚀 Project Highlights

### **1. Data & Insights: Stories Behind the Numbers**

Turn complex data into **compelling visuals** that tell the story of African Americans in AI:

- **📈 Representation Over Time**: Animated line charts showing growth (or stagnation) from 2015–2023.
- **🏢 Company Breakdown**: A treemap revealing which tech companies lead (or lag) in diversity hiring.
- **💰 Pay Equity**: Side-by-side comparisons of salary disparities across gender and ethnicity.
- **🌍 Geographic Distribution**: Interactive maps showing where African American AI professionals are concentrated.

**Why it matters**: These visuals don’t just show numbers—they **tell a story** of progress, disparities, and opportunities in AI.

### **2. Accessibility Tool: Contrast Checker**

An **interactive tool** that makes accessibility effortless:

- **🎨 Real-Time Contrast Checks**: Test any color combination instantly to see if it meets WCAG standards.
- **🔍 WCAG Compliance Visualizer**: Live previews showing how your colors perform against accessibility guidelines.
- **🛠️ Suggested Fixes**: Get instant recommendations for improving contrast, with before/after comparisons.
- **📊 Accessibility Score**: A dynamic score (0–100) that updates as you adjust colors.

**Why it matters**: Accessibility isn’t just a feature—it’s a **necessity**. This tool empowers designers and developers to build inclusive products effortlessly.

### **3. Case Study: Building Inclusive AI Tools**

A **narrative-driven** breakdown of how we:

- **Analyzed diversity trends** in AI roles using Python (Pandas, Scikit-learn).
- **Built an accessibility tool** with Python scripts and Flask API.
- **Integrated machine learning** to predict contrast compliance.
- **Designed a responsive website** with HTML5, CSS3, and Bootstrap.

**Why it matters**: This project bridges **data, accessibility, and storytelling** to inspire action in the AI community.

## 🛠️ Technical Stack

| Category          | Technologies Used                          |
|-------------------|------------------------------------------|
| **Frontend**      | HTML5, CSS3, JavaScript, Chart.js, Bootstrap |
| **Backend**       | Python (Flask)                             |
| **Data Analysis** | Python (Pandas, Scikit-learn)           |
| **Visualization** | Chart.js, D3.js (for interactive maps)   |
| **Accessibility** | WCAG contrast guidelines, automated checks |
| **Deployment**    | GitHub Pages                               |

## 📊 Data Analysis Process

### **Data Collection**

Scraped job postings from major tech companies using Python (Requests, BeautifulSoup). The dataset includes:
- Job titles and descriptions
- Companies and locations
- Salary ranges and benefits
- Keywords related to AI and diversity

### **Data Cleaning**

Used Pandas to:
- Handle missing values and outliers
- Normalize text fields (e.g., job titles, company names)
- Filter relevant job postings (e.g., AI/ML roles)

### **Analysis**

Calculated key metrics:
- Percentage representation of African Americans in AI roles
- Gender and ethnic pay gaps
- Trends over time (2015–2023)
- Geographic distribution of AI professionals

### **Visualization**

Created **interactive and engaging** charts:
- **Line charts** for trends over time
- **Bar charts** for company breakdowns
- **Treemaps** for hierarchical data
- **Doughnut charts** for geographic distribution
- **Animated visuals** to highlight key insights

## 🎨 Accessibility Tool

### **Contrast Checker**

The contrast checker tool evaluates color combinations against WCAG standards:

1. **Contrast Calculation**: Uses the WCAG contrast ratio formula to evaluate color combinations.
2. **Python Scripts**:
   - `check_contrast.py`: Evaluates whether a given color combination meets WCAG standards.
   - `fix_contrast.py`: Suggests improved color palettes for non-compliant combinations.
3. **Machine Learning**: A simple logistic regression model predicts contrast compliance based on historical data.

### **Technical Challenges**

- **Data Scraping**: Handling dynamic content and avoiding detection by anti-scraping measures.
- **ML Model Training**: Ensuring the model was accurate and efficient for real-time use without overfitting.
- **Integration**: Seamlessly connecting Python scripts with JavaScript frontend via Flask API.
- **Performance**: Optimizing the Flask backend to handle multiple requests efficiently.

## 💡 Case Study: Building Inclusive AI Tools

### **Why This Project?**

This project aims to:
- **Amplify voices** in AI by showcasing the contributions of African Americans.
- **Create inclusive tools** that empower developers to build accessible products.
- **Inspire action** by highlighting disparities and opportunities in AI.

### **Key Takeaways**

1. **Data tells a story**: Visualizations make complex data accessible and engaging.
2. **Accessibility matters**: Small changes (like contrast fixes) can have a **huge impact** on millions of users.
3. **Technology bridges gaps**: By combining data analysis, ML, and web development, we can drive meaningful change.

## 🚀 How to Run Locally

### **1. Clone the Repository**

```bash
git clone https://github.com/yourusername/AfricanAmericansInAI.git
cd AfricanAmericansInAI
```

### **2. Install Dependencies**

Ensure you have Python and Node.js installed:

```bash
python --version  # Should be 3.6 or higher
npm --version     # Should be 6.0 or higher
```

### **3. Run the Flask Backend**

The contrast checker tool requires a Flask backend to function fully. Run the Flask server:

```bash
cd flask_app
python3 app.py
```

The Flask server will start on `http://localhost:5000`.

### **4. Open the Website**

Open `index.html` in a web browser:

```bash
xdg-open index.html
```

Or, for a more polished experience, deploy the website to **GitHub Pages** (see below).

### **5. Deploy to GitHub Pages**

1. Create a GitHub repository and push your project to it.
2. Enable GitHub Pages in the repository settings.
3. Your website will be live at `https://yourusername.github.io/AfricanAmericansInAI/`.

## 🌟 How to Contribute

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

### **Reporting Issues**

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.

## 📜 License

This project is licensed under the **MIT License**.

---

## Features

- **Data & Insights**: Visualizations of diversity trends in AI roles.
- **Accessibility Tool**: Check and improve color contrast for inclusive design.
- **Case Study**: Technical deep dive into the project's development.

## Project Structure

```plaintext
AfricanAmericansInAI/
├── css/                  # Stylesheets
├── js/                   # JavaScript files
├── index.html            # Main webpage
├── check_contrast.py     # Python script for contrast checking
├── fix_contrast.py       # Python script for fixing contrast
├── flask_app/            # Flask backend for contrast checker
│   └── app.py            # Flask application
├── README.md             # Project documentation
└── .nojekyll             # Prevent Jekyll processing
```

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AfricanAmericansInAI.git
cd AfricanAmericansInAI
```

### 2. Run the Flask Backend

The contrast checker tool requires a Flask backend to function fully. Run the Flask server:

```bash
cd flask_app
python app.py
```

The Flask server will start on `http://localhost:5000`.

### 3. Open the Website

Open `index.html` in a web browser:

```bash
open index.html
```

Or, for a more polished experience, deploy the website to **GitHub Pages** (see below).

### 4. Deploy to GitHub Pages

1. Create a GitHub repository and push your project to it.
2. Enable GitHub Pages in the repository settings.
3. Your website will be live at `https://yourusername.github.io/AfricanAmericansInAI`.

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript, Chart.js
- **Backend**: Python (Flask)
- **Data Analysis**: Python (Pandas, Scikit-learn)
- **Accessibility**: WCAG contrast guidelines

## Case Study

### Data Analysis

We analyzed job postings from major tech companies to assess representation of African Americans in AI roles. The results were visualized using **Chart.js** and embedded in the website.

### Accessibility Tool

The contrast checker tool uses Python scripts (`check_contrast.py`, `fix_contrast.py`) to evaluate and improve color contrast compliance with WCAG standards. The tool is embedded in the website as an interactive demo.

### How to Contribute

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.

---