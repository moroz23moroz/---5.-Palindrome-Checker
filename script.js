window.addEventListener("load", () => {
  const bts = document.querySelector(".bts");
  const result = document.querySelector(".result");

  bts.addEventListener("click", palindrome);

  function palindrome() {
    const word = document.querySelector(".input-text").value;
    let len = word.length;

    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    // let flip = end.split("").reverse().join("");
    let flip = [...end].reverse().join("");
    if (start == flip) {
      result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    } else {
      result.innerHTML = `${word.toUpperCase()} isn't  a palindrome`;
    }
  }
});
