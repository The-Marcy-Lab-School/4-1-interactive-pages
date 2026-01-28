const generateRandomColor = () => {
  const colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const index = Math.floor(Math.random() * colorOptions.length);
  return colorOptions[index];
}

document.body.addEventListener('keydown', (event) => {
  if (event.code === "Space") {
    document.body.style.backgroundColor = generateRandomColor();
  }
})

const instructions = document.querySelector("#instructions")
let fontSize = 16;

document.querySelector('#increase-button').addEventListener('click', () => {
  fontSize += 1;
  instructions.style.fontSize = `${fontSize}px`;
})

document.querySelector('#decrease-button').addEventListener('click', () => {
  fontSize -= 1;
  instructions.style.fontSize = `${fontSize}px`;
})
