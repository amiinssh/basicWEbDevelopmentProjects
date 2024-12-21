# Age Calculator

This project is a simple web-based **Age Calculator** that allows users to input their birthdate and calculate their exact age in years, months, and days. It is designed with a modern and clean UI using HTML, CSS, and JavaScript.

## Features
- **Dynamic Age Calculation**: Computes the user's age based on their birthdate and today's date.
- **User-Friendly Date Picker**: The input field uses an HTML5 date picker for easy and accurate date selection.
- **Responsive Design**: Works across various screen sizes and devices.
- **Error-Free Logic**: Prevents selecting future dates and handles edge cases like month and day adjustments.

---


## Technology Stack
- **HTML5**: For structuring the application and providing the date input functionality.
- **CSS3**: For styling the application with a visually appealing design and responsive layout.
- **JavaScript**: For the logic to calculate the age accurately and handle user interactions.

---

## File Structure
```
Age Calculator/
│
├── index.html         # Main HTML file containing the structure of the application.
├── style.css          # CSS file for styling the user interface.
└── script.js          # JavaScript file for the age calculation logic.
```

---

## Usage
1. **Open the Application**: Load the `index.html` file in any modern web browser.
2. **Enter Birthdate**: Use the date picker to select your birthdate.
3. **Click "Calculate"**: Press the button, and your age will be displayed below.

---

## Code Overview

### HTML
The core structure includes:
- A container for the calculator.
- A date input field for the birthdate.
- A button to trigger the calculation.
- A paragraph to display the result.

### CSS
Styling includes:
- A gradient background for visual appeal.
- Hover effects for buttons.
- Clean and readable fonts.

### JavaScript
- Validates and handles the date input.
- Calculates the difference in years, months, and days.
- Dynamically updates the result in the DOM.

---

## Sample Output
If your birthdate is `2000-12-25` and today's date is `2023-02-20`, the application will display:
```
You are 22 years, 1 month, and 26 days old.
```

---

## Future Enhancements
- Add error handling for invalid or empty input fields.
- Support for time zone differences to enhance accuracy.
- Option to calculate age relative to a custom date instead of today's date.

