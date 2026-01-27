console.log('hello world');

const generateRandomColor = () => {
  const colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const index = Math.floor(Math.random() * colorOptions.length);
  return colorOptions[index];
}

console.log(generateRandomColor());

const changeColorRandomly = (event) => {
  event.target.style.backgroundColor = generateRandomColor();
};

const button = document.querySelector("#click-me");
button.addEventListener('click', changeColorRandomly);

const heading = document.querySelector("h1");
heading.addEventListener('mouseover', changeColorRandomly);
