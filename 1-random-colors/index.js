const generateRandomColor = () => {
  const colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const index = Math.floor(Math.random() * colorOptions.length);
  return colorOptions[index];
}

document.body.style.backgroundColor = generateRandomColor();
