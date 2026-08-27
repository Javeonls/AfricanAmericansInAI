# African Americans in AI

A project celebrating the contributions of African Americans in artificial intelligence, with a focus on **data analysis, accessibility, and web development**. This project includes:

- **Data & Insights**: Visualizations of diversity trends in AI roles.
- **Accessibility Tool**: Check and improve color contrast for inclusive design.
- **Case Study**: Technical deep dive into the project's development.

## Features

- **Interactive Data Visualizations**: Line and bar charts showing diversity trends in AI roles.
- **Contrast Checker Tool**: Automated checks for WCAG compliance using Python and Flask.
- **Machine Learning Integration**: A simple logistic regression model to predict contrast compliance.
- **Responsive Web Design**: Built with HTML5, CSS3, and Bootstrap for accessibility and usability.

## Technical Stack

| Category          | Technologies Used                          |
|-------------------|------------------------------------------|
| **Frontend**      | HTML5, CSS3, JavaScript, Chart.js, Bootstrap |
| **Backend**       | Python (Flask)                             |
| **Data Analysis** | Python (Pandas, Scikit-learn)           |
| **Accessibility** | WCAG contrast guidelines, automated checks |
| **Deployment**    | GitHub Pages                               |

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AfricanAmericansInAI.git
cd AfricanAmericansInAI
```

### 2. Install Dependencies

Ensure you have Python and Node.js installed:

```bash
python --version  # Should be 3.6 or higher
npm --version     # Should be 6.0 or higher
```

### 3. Run the Flask Backend

The contrast checker tool requires a Flask backend to function fully. Run the Flask server:

```bash
cd flask_app
python app.py
```

The Flask server will start on `http://localhost:5000`.

### 4. Open the Website

Open `index.html` in a web browser:

```bash
open index.html
```

Or, for a more polished experience, deploy the website to **GitHub Pages** (see below).

### 5. Deploy to GitHub Pages

1. Create a GitHub repository and push your project to it.
2. Enable GitHub Pages in the repository settings.
3. Your website will be live at `https://yourusername.github.io/AfricanAmericansInAI/`.

## Data Analysis Process

### Data Collection

We scraped job postings from major tech companies using Python (Requests, BeautifulSoup). The data included:
- Job titles
- Companies
- Locations
- Salary ranges
- Keywords related to AI and diversity

### Data Cleaning

Used Pandas to:
- Handle missing values
- Normalize text fields
- Filter relevant job postings

### Analysis

Calculated metrics such as:
- Percentage representation of African Americans in AI roles
- Gender pay gaps
- Trends over time

### Visualization

Created interactive charts using Chart.js to visualize:
- Line charts for trends over time
- Bar charts for representation by company

## Accessibility Tool

### Contrast Checker

The contrast checker tool evaluates color combinations against WCAG standards:

1. **Contrast Calculation**: Uses the WCAG contrast ratio formula to evaluate color combinations.
2. **Python Scripts**: 
   - `check_contrast.py`: Evaluates whether a given color combination meets WCAG standards.
   - `fix_contrast.py`: Suggests improved color palettes for non-compliant combinations.
3. **Machine Learning**: A simple logistic regression model predicts contrast compliance based on historical data.

### Technical Challenges

- **Data Scraping**: Handling dynamic content and avoiding detection by anti-scraping measures.
- **ML Model Training**: Ensuring the model was accurate and efficient for real-time use without overfitting.
- **Integration**: Seamlessly connecting Python scripts with JavaScript frontend via Flask API.
- **Performance**: Optimizing the Flask backend to handle multiple requests efficiently.

## Case Study

### Overview

This case study details the development of the African Americans in AI project, focusing on:
- Data analysis to highlight diversity trends in AI roles.
- Building an accessibility tool to improve web design standards.
- Technical challenges and solutions encountered during development.

### Technical Details

- **Data Analysis**: Used Pandas for data cleaning and analysis, and Chart.js for visualization.
- **Accessibility Tool**: Developed using Python scripts and Flask API for contrast checks.
- **Machine Learning**: Implemented a logistic regression model to predict contrast compliance.
- **Web Development**: Built with HTML5, CSS3, and Bootstrap for a responsive design.

## How to Contribute

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

### Reporting Issues

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.

## License

This project is licensed under the MIT License.

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