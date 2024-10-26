Palindrome Checker
Overview

This project is a simple Palindrome Checker built with HTML, CSS, and JavaScript. The app allows users to enter a word and check if it’s a palindrome.
What is a Palindrome?

A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). Examples of palindromes include:

    "racecar"
    "madam"
    "level"

In this application, the code checks if the user-inputted word is a palindrome and displays a message to indicate the result.
How It Works
Key JavaScript Code

    Event Listener: When the "Check" button is clicked, the palindromeChecker function is triggered.
    Palindrome Check:
        The function extracts the first half of the word (start) and the second half (end).
        It reverses the second half and compares it to the first half.
        If the two halves match, the word is a palindrome.

Code Breakdown

javascript

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindromeChecker);

function palindromeChecker() {
  const word = document.querySelector(".input-text").value;
  let len = word.length;

  // Get the first half of the word and convert it to lowercase
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();

  // Get the second half, also in lowercase
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  // Reverse the second half
  let flip = [...end].reverse().join("");

  // Check if the first half matches the reversed second half
  if (start == flip) {
    result.innerHTML = `${word} is a palindrome`;
  } else {
    result.innerHTML = `${word} is NOT a palindrome`;
  }
}

Explanation of Key Variables

    start: Extracts and stores the first half of the word in lowercase.
    end: Extracts the second half, also in lowercase.
    flip: Reverses the end string for comparison.

Result Display

The function updates the result element with a message indicating whether the input word is a palindrome or not.
Usage

    Enter a word in the input field.
    Click the Check button.
    The result will display whether the word is a palindrome.