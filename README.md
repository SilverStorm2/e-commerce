# E-commerce Store - Modern Style

This project is the front-end of the "Modern Style" e-commerce store, offering stylish products and an intuitive user interface. The project focuses on modern design, accessibility, and adherence to web standards.

## Technical Structure

The project is built using standard web technologies, with an emphasis on modularity and ease of development:

*   **HTML:** The page structure is defined in `index.html` (homepage) and `moda.html` (fashion category page).
*   **SASS/CSS:** Styling is managed using the SASS preprocessor (`sass/style.scss`), which is compiled into pure CSS (`css/style.css`).
*   **JavaScript:** Basic interactivity logic is contained within `js/script.js`.
*   **Development Tools:** The project uses `npm` for dependency and script management, including HTML validation, JS linting, and SASS compilation.

## Key Improvements and Features Implemented

As part of the project's development, several significant enhancements have been introduced:

### Accessibility and HTML Validation

*   **`type` Attributes for Buttons:** All `<button>` elements have been supplemented with the `type="button"` attribute for correct semantics and functionality.
*   **Accessibility Enhancements (ARIA):** Links (`<a>`) containing SVG icons have been enriched with `aria-label` attributes, significantly improving usability for screen reader users.
*   **SVG Focusability:** `<svg>` elements nested within links have been marked `focusable="false"` to prevent unwanted keyboard focus issues.
*   **Header Optimization:** The header structure in both `index.html` and `moda.html` has been optimized. The nested `div.container` directly under `header.top-bar` was removed, and flexbox layout management (Modern Style on the left, navigation on the right) was moved to `.top-bar .container` in SASS, ensuring correct margins and element placement.

### Styling and Responsiveness

*   **SASS for Modularity:** Styling is managed in SASS, which facilitates code organization and speeds up modifications.
*   **Dynamic Gradients:** Hero sections on both the homepage and fashion page utilize dynamic color gradients (a blend of green and blue), providing a modern and aesthetically pleasing look.
*   **Responsive Design:** The project includes basic media queries (`@media (max-width: 768px)`), ensuring optimal page display across various screen sizes, from desktops to mobile devices.

### Version Control

*   **Git Repository:** The project uses Git for efficient code version management.
*   **Remote Repository Change:** The `origin` remote repository URL was successfully changed from `project-template.git` to `https://github.com/SilverStorm2/e-commerce.git`. All local changes have been synchronized with the new repository.

## Running the Project

To run the project locally and work on it, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/SilverStorm2/e-commerce.git
    cd sklep-internetowy
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Compile SASS (required after `.scss` file changes):**
    ```bash
    npm run build:sass
    ```
4.  **Start Watch Mode (optional, for automatic compilation and browser refresh):**
    ```bash
    npm run watch
    ```
5.  **Open HTML Files:** Open `index.html` or `moda.html` in your browser.

---

# Project Template

This repository serves as a project template for starting new JavaScript projects. It includes essential configuration files for linting, formatting, and managing code quality.

## Files Included

- **`package.json`**: Manages project dependencies and task runner scripts.
- **`.eslintrc.json`**: ESLint configuration for enforcing consistent JavaScript style.
- **`.editorconfig`**: Defines coding styles (e.g., indentation, line breaks) across different editors.
- **`.stylelintrc.json`**: Configuration for StyleLint, ensuring CSS/SCSS code consistency.

## Usage

1. Clone this repository for a new project.
2. Customize task runner and dependencies as needed for your specific project.

## Installation

Run the following to install project dependencies:

```bash
npm install
