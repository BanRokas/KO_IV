const button = document.getElementById("btn");

let counter = 0;

button.addEventListener("click", () => {
  counter++;
  button.textContent = `Clicked ${counter} times`;
  if (counter % 2 === 0) {
    button.style.backgroundColor = "lightblue";
  } else {
    button.style.backgroundColor = "lightgreen";
  }
});
