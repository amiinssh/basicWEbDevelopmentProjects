Counter App

A simple JavaScript counter application that allows users to increment, decrement, and reset a counter display on a webpage.
Features

    Increment: Increases the counter value by 1 when the Add button is clicked.
    Decrement: Decreases the counter value by 1 when the Subtract button is clicked.
    Reset: Resets the counter to 0 when the Reset button is clicked.

Code Overview

This application uses JavaScript to add click event listeners to buttons that control the counter:

    HTML Elements:
        count: Displays the current counter value.
        add: Button to increase the counter.
        subtract: Button to decrease the counter.
        resetCount: Button to reset the counter to 0.

    Event Listeners:
        add: Increments the counter.
        subtract: Decrements the counter.
        resetCount: Resets the counter to zero.

Usage

To use this code:

    Link the JavaScript file in an HTML file with elements corresponding to .count, .add, .reset, and .subtract class selectors.
    Open the HTML file in a browser to see the counter functionality in action.

Example HTML Structure

html

<div class="container">
    <span class="count">0</span>
    <button class="add">Add</button>
    <button class="subtract">Subtract</button>
    <button class="reset">Reset</button>
</div>