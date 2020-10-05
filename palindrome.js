(() => {
  const search = document.getElementById("search");
  const submit = document.getElementById("submit");
  const container = document.getElementById("container");
  const form = document.getElementById("form");

  const isPalindrome = (str) => str === str.split("").reverse().join("");

  submit.addEventListener("click", () => {
    let h1 = document.createElement("H1");
    isPalindrome(search.value)
      ? (h1.innerHTML = `${search.value} is a palindrome`)
      : (h1.innerHTML = `${search.value} is not a palindrome`);
    container.appendChild(h1);
  });
})();
