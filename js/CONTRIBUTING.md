# Contributing to African Americans in AI

Thank you for your interest in contributing to the "African Americans in AI" project! We welcome contributions from the community to help expand our directory of pioneers and improve our data visualizations.

## How to Contribute

### Reporting Issues

If you find a bug, have a question, or want to suggest an improvement, please open an issue on the [GitHub Issues](https://github.com/javeonls/AfricanAmericansInAI/issues) page. Be sure to:

- Provide a clear description of the issue or suggestion
- Include any relevant screenshots or examples
- Reference specific sections of the site if applicable

### Adding New Pioneers

To add a new pioneer to the directory, please follow these detailed steps to ensure consistency and quality:

### 1. Verify the Information

Cross-reference information from at least two reliable sources. Use:
- Wikipedia articles
- Black in AI's website and history archives
- University news archives and press releases
- NASA's history office and other government archives
- ACM/IEEE bios and publications
- The Algorithmic Justice League/DAIR sites

Verify the following details for each pioneer:
- Full name
- Primary field of contribution
- Key achievements (1-2 sentences)
- Organization(s) associated with
- Year/era of contributions
- Source links for verification

### 2. Create a New Entry

Add a new entry to the `pioneers` array in the [data.js](js/data.js) file following this template:

```javascript
{
  id: [next available ID],
  name: "[Full Name]",
  role: "[Role/Title]",
  organization: "[Organization]",
  achievement: "[1-2 sentences describing key achievements]",
  category: "[Category: AI Ethics & Governance, Foundational Computing, etc.]",
  year: "[Year/era of contributions]",
  color: "[Hex color code for visual distinction]",
  source: "[Link to source, e.g., 'https://example.com']"
}
```

### 3. Add an Image (Optional but Recommended)

If available, add a properly licensed image of the pioneer:

1. Place the image in the `images/pioneers/` directory
2. Use a descriptive filename (e.g., `katherine-johnson.jpg`)
3. Update the `getAvatarUrl` function in [app.js](js/app.js) to include the new image
4. Ensure the image is properly licensed (public domain, CC-BY-SA, etc.)

### 4. Update Categories

If the new pioneer belongs to a new category, add it to the `categories` array in [data.js](js/data.js):

```javascript
categories: ["All", "AI Ethics & Governance", "Foundational Computing", "[New Category]"]
```

### 5. Submit a Pull Request

Open a pull request with your changes including:
- A clear description of the new pioneer
- Their key contributions and significance
- The sources used for verification
- Any images added

The maintainer will review the information, sources, and image licensing before merging.

### Quality Checklist

Before submitting your pull request, verify that:
- [ ] The information is accurate and sourced from at least two reliable sources
- [ ] The entry follows the established format and style
- [ ] The category is appropriate and either exists or is added
- [ ] Any images are properly licensed and described
- [ ] The pull request description explains the significance of the addition

### Improving Data Visualizations

To improve the data visualizations, you can:

1. **Update Data**: Modify the data in the [ai_diversity_data.json](data/ai_diversity_data.json) file to reflect new or updated statistics.

2. **Enhance Visualizations**: Update the chart configurations in [app.js](js/app.js) to improve the visual presentation of the data.

3. **Add New Charts**: Create new visualizations by adding new chart configurations and updating the corresponding HTML elements.

4. **Submit a Pull Request**: Open a pull request with your changes. The maintainer will review the visualizations and data before merging.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## Style Guide

### JavaScript

- Use consistent indentation (2 spaces)
- Follow the existing code style and structure
- Include comments to explain non-obvious logic
- Ensure all functions and variables have descriptive names

### Markdown

- Use clear and concise language
- Follow the project's existing Markdown style
- Include links to relevant sources

## Testing

While the project does not currently include automated tests, contributors are encouraged to:

- Test their changes locally to ensure they work as expected
- Verify that the visualizations render correctly
- Check that the site remains accessible and responsive

## Pull Request Guidelines

1. **Ensure Your Changes Are Related to a Single Issue**: If your pull request fixes multiple issues, please split it into smaller, focused pull requests.

2. **Update Documentation**: If your changes affect how the project is used, update the documentation accordingly.

3. **Include Tests**: If applicable, include tests to verify your changes.

4. **Follow the Project's Coding Style**: Ensure your code follows the existing style and conventions.

5. **Provide a Clear Description**: In the pull request description, explain the changes you made and why they are necessary.

## Questions?

If you have any questions about contributing to this project, please open an issue or contact the maintainer directly.

Thank you for your contributions to the "African Americans in AI" project!