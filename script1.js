// Wait for the window to load before executing the script
window.addEventListener("load", () => {
  // Your main code will go here
  console.log("Window has finished loading");

  // DOM elements
  const inputText = document.querySelector(".input-text");
  const checkButton = document.querySelector(".bts");
  const result = document.querySelector(".result");

  // Add event listener to the check button
  checkButton.addEventListener("click", checkPalindrome);

  function checkPalindrome() {
    const word = inputText.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const isPalindrome = word === word.split("").reverse().join("");

    result.textContent = isPalindrome
      ? `"${inputText.value}" is a palindrome!`
      : `"${inputText.value}" is not a palindrome.`;
  }
});
