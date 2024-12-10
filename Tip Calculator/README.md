# Tip Calculator

A simple, interactive Tip Calculator built with HTML, CSS, and JavaScript. This tool helps users calculate the tip amount based on the bill and service quality, providing the total amount in a visually clean interface with responsive animations and error handling.

---

## Features

### **1. Calculate Tip and Total Amount**
- **Input Fields**:
  - Enter the bill amount in the `Bill` field.
  - Select a tip percentage from the `Rate Service` dropdown, categorized by service quality.
- **Calculation**:
  - The tip amount is calculated as a percentage of the bill.
  - Both the tip and the total amount (bill + tip) are displayed dynamically.

### **2. Error Handling**
- Detects empty fields or invalid inputs:
  - Displays an error message if the bill amount or service rate is missing.
  - Alerts the user to enter a valid number if the bill amount is non-numeric.
- Error messages disappear automatically after 3 seconds.

### **3. User-Friendly Design**
- **Responsive Layout**:
  - Works well on desktops and mobile devices.
  - Uses a centered layout for accessibility.
- **Interactive Elements**:
  - A button with hover effects for enhanced user interaction.
  - Real-time results update after clicking the button.
- **Styled Notifications**:
  - Errors are displayed prominently in red for better visibility.

---

## Technologies Used

### **1. HTML**
- Creates the structure, including input fields, dropdown menus, and result displays.

### **2. CSS**
- Custom properties for theme consistency.
- Responsive design using flexbox.
- Hover and transition effects for interactive elements.
- Color-coded error messages and result displays.

### **3. JavaScript**
- Handles dynamic functionality:
  - Validates user input.
  - Performs calculations for the tip and total amount.
  - Manages error visibility with timeouts.

---

## How It Works

1. **User Inputs**:
   - Enter the bill amount in the `Bill` field.
   - Select a tip rate based on the quality of service.

2. **Calculation Logic**:
   - Tip amount = `bill * rate`.
   - Total amount = `bill + tip`.
   - Results are rounded up using `Math.ceil` for simplicity.

3. **Error Handling**:
   - If the bill or rate is missing, an error message is displayed.
   - If the bill is not a number, a validation message prompts the user to enter a valid amount.

4. **Results Display**:
   - Updates the `Tip Amount` and `Total Amount` fields dynamically.

---


## Customization

1. **Add New Tip Rates**:
   - Update the dropdown options in the HTML for additional rates.
   ```html
   <option value="0.20">20% - Exceptional</option>
   ```

2. **Adjust Colors and Styles**:
   - Modify CSS variables for a custom theme:
   ```css
   :root {
       --color-primary: #005490;
       --color-sec: #ff5722;
   }
   ```



