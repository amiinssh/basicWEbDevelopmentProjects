# Modern Login & Registration Page

A stylish and interactive login and registration form with animated transitions and social media integration.

## Features

- **Interactive Toggle**: Switch between "Sign In" and "Sign Up" forms with a smooth slide animation.
- **Social Login**: Includes options for Google, Facebook, GitHub, and LinkedIn login icons.
- **Responsive Layout**: Fully adaptable to various screen sizes.
- **Minimalistic Design**: Uses a soft color palette with gradients and subtle shadowing for a modern look.

## Technologies Used

- **HTML5**
- **CSS3** (custom animations, gradients, and layout)
- **JavaScript** (for toggling the forms)
- **Font Awesome** (for social media icons)

## Usage

1. **Clone the Project**: Download the HTML, CSS, and JavaScript files.
2. **Add Custom Backgrounds** (optional): Replace `background: linear-gradient` with your choice of colors.
3. **Edit Styles**: Modify `style.css` to adjust layout, colors, and button styles as needed.

## Setup for Font Awesome

Ensure icons render properly by linking to Font Awesome in the HTML:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
```

## How to Toggle Forms

JavaScript enables the toggle effect:
```javascript
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => container.classList.add("active"));
loginBtn.addEventListener("click", () => container.classList.remove("active"));
```

