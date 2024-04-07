let displayText = "";
let currOperation = [];

function updateDisplay(btn)
{
  displayText = updateOperation(btn).join(" ");
  const display = document.querySelector(".display");
  const displayBox = document.querySelector(".displayBox");
  displayBox.textContent = displayText;
}

function updateOperation (btn)
{
  // If input is not a number, means its an operation
  if(isNaN(btn))
  {
    if (currOperation.length == 1)
    {
      currOperation[1] = btn;
    }
  }

  else
  {
      if(currOperation.length == 0)
      {
        currOperation[0] = btn.toString();
      }
      else if (currOperation.length == 1)
      {
        currOperation[0] += btn.toString();
      }
      else
      {
        if (currOperation[2] === undefined)
        {
            currOperation[2] = btn.toString();
        }
        else
        {
            currOperation[2] += btn.toString();
        }
      }
  }
  return currOperation;
}

function clearDisplay()
{
  displayText = "";
  currOperation = [];
  const displayBox = document.querySelector(".displayBox");
  displayBox.textContent = displayText;
}

function doOperation()
{
    currOperation[0] = operate(currOperation[0], currOperation[1], currOperation[2]);
    let temp = currOperation[0];
    currOperation = [];
    currOperation.push(temp);
    displayText = currOperation;
    console.log(currOperation);
    console.log(displayText);
    const displayBox = document.querySelector(".displayBox");
    displayBox.textContent = displayText;
}

function operate(num1, operator, num2)
{
  let output = "";
  if(operator == "+")
  {
    output = add(num1, num2);
  }
  else if(operator == "-")
  {
    output = subtract(num1, num2);
  }
  else if(operator == "x")
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
  return +num1 + +num2;
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
