let displayText = "";

function updateDisplay( btn )
{
  displayText += btn;
  const display = document.querySelector(".display");
  const displayBox = document.querySelector(".displayBox");
  displayBox.textContent = displayText;
}

function clearDisplay()
{
  displayText = "";
  const displayBox = document.querySelector(".displayBox");
  displayBox.textContent = displayText;
}

function operate( num1, operator, num2)
{
  let output = "";
  if(operator == "+")
  {
    output = add(num1, num2);
  }
  else if(operator == "-")
  {
    output = substract(num1, num2);
  }
  else if(operator == "*")
  {
    output = multiply(num1, num2);
  }
  else if(operator == "/")
  {
    output = divide(num1, num2);
  }
  else
  {
    console.error("Operation doesnt exist");
  }

  return output;
}

function add(num1, num2)
{
  return num1 + num2;
}

function subtract(num1, num2)
{
  return num1 - num2;
}

function multiply(num1, num2)
{
  return num1 * num2;
}

function divide(num1, num2)
{
  return num1 / num2;
}
