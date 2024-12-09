# BMI Calculator

This project is a **Body Mass Index (BMI) Calculator** implemented with HTML, CSS, and JavaScript. It provides an interactive interface to calculate BMI based on user-provided height (in centimeters) and weight (in kilograms), offering real-time feedback and styled results. The application is responsive, accessible, and features smooth animations for an enhanced user experience.

---

## Features

### **1. User-Friendly Interface**
- **Input Fields**: 
  - Height (in cm)
  - Weight (in kg)
- **Buttons**:
  - `Calculate`: Computes the BMI.
  - `Reset`: Clears the input fields and results.

### **2. Real-Time Feedback**
- Displays appropriate messages for:
  - Invalid height or weight entries.
  - BMI result categories:
    - Underweight
    - Normal
    - Overweight
    - Obese

### **3. Smooth Animations**
- Styled hover effects on buttons (`Calculate` and `Reset`).
- Gradual color transitions for results background.

### **4. Responsive Design**
- Adaptive layout ensures a great user experience across devices.
- Centralized content with a clean and minimalistic look.

### **5. Dynamic Interactivity**
- Result display changes dynamically based on BMI value.
- Reset button visibility toggles depending on the state.

---

## How It Works

### 1. **Input Validation**
- Ensures height and weight are valid numbers.
- Prompts users with appropriate messages if inputs are invalid.

### 2. **BMI Calculation**
The BMI formula:
\[
\text{BMI} = \frac{\text{Weight (kg)}}{\text{Height (m)}^2}
\]
- Height in cm is converted to meters before calculation.
- Result is displayed to two decimal places.

### 3. **BMI Categories**
Based on the computed BMI, the result is categorized:
- **Underweight**: BMI < 18.5 (orange background)
- **Normal**: 18.5 ≤ BMI < 24.9 (green background)
- **Overweight**: 25 ≤ BMI < 29.9 (blue background)
- **Obese**: BMI ≥ 30 (red background)

### 4. **Reset Functionality**
- Clears the input fields and hides the result section.

---

## Project Structure

### **HTML**
- Defines the form layout with inputs for height and weight.
- Buttons for calculation and reset actions.
- A result display section for feedback.

### **CSS**
- Custom properties for theme colors:
  - Primary: `--color-primary`
  - Secondary: `--color-sec`
  - Neutral: `--grey` and `--dark-grey`
- Responsive styles for centralized content.
- Smooth transitions for hover effects and dynamic result display.

### **JavaScript**
- Event listeners for:
  - `Calculate` button: Computes and displays BMI.
  - `Reset` button: Clears form and results.
- Dynamic DOM manipulation for result styling and validation messages.

---


## Customization

1. **Styles**:
   - Update colors in the `:root` section of the CSS file to match your design.
   - Adjust button sizes or fonts for your requirements.

2. **Functionality**:
   - Add more categories or modify BMI thresholds in the JavaScript logic.

3. **Accessibility**:
   - Enhance with ARIA roles and labels for better screen reader support.

---

## Technologies Used

- **HTML5**: Structure and semantic layout.
- **CSS3**: Styling and animations.
- **JavaScript**: Form validation, calculations, and DOM manipulation.

---

