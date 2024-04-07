let displayText = "";
let currOperation = [];

document.addEventListener("keypress", (e) => {
  console.log(e);
  let lastChar = e.code.slice(-1);
  if(!isNaN(lastChar))
  {
    updateDisplay(lastChar);
  }
  else if (e.code == "Slash" || e.code == "NumpadDivide")
  {
    updateDisplay("/");
  }
  else if (e.code == "KeyX" || e.code == "NumpadMultiply")
  {
    updateDisplay("x");
  }
  else if (e.code == "Minus" || e.code == "NumpadSubtract")
  {
    updateDisplay("-");
  }
  else if ((e.code == "Equal" && e.shiftKey) || e.code == "NumpadAdd")
  {
    updateDisplay("+");
  }
  else if ((e.code == "Equals" && !e.shiftKey) || e.code == "Enter" || e.code == "NumpadEnter")
  {
    doOperation();
  }
  else if (e.code == "Period" || e.code == "NumpadDecimal")
  {
    decimal();
  }
})

document.addEventListener("keydown", (e) => {
  if(e.code == "Backspace")
  {
    del();
  }
})

function updateDisplay(btn)
{
  displayText = updateOperation(btn).join(" ");
  const display = document.querySelector(".display");
  const displayBox = document.querySelector(".displayBox");
  displayBox.textContent = displayText;
}

function updateOperation (btn)
{
  if(btn == "")
  {
    return currOperation;
  }
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

    // Pop all but result
    currOperation.pop();
    currOperation.pop();
    updateDisplay("");
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

function decimal()
{
  if(currOperation.length == 0)
  {
    currOperation[0] = ".";
  }
  else if (currOperation.length == 1)
  {
    if(!currOperation[0].includes("."))
    {
      currOperation[0] += "."
    }
  }
  else
  {
    if (currOperation[2] === undefined)
    {
        currOperation[2] = ".";
    }
    else
    {
      if(!currOperation[2].includes("."))
      {
        currOperation[2] += "."
      }
    }
  }
  updateDisplay("");
}

function negate()
{
  if(currOperation.length == 0)
  {
    currOperation[0] = "-";
  }
  else if (currOperation.length == 1)
  {
    if(!currOperation[0].toString().includes("-"))
    {
      currOperation[0] = "-" + currOperation[0];
    }
    else
    {
      currOperation[0] = currOperation[0].toString().replace("-", "");
    }
  }
  else
  {
    if (currOperation[2] === undefined)
    {
        currOperation[2] = "-";
    }
    else
    {
      if(!currOperation[2].toString().includes("-"))
      {
        currOperation[2] = "-" + currOperation[2];
      }
      else
      {
        currOperation[2] = currOperation[2].toString().replace("-","");
      }
    }
  }
  updateDisplay("");
}

function del()
{
  if (currOperation.length == 1)
  {
    currOperation[0] = currOperation[0].slice(0, -1);
    if(currOperation[0].toString().length == 0)
    {
      currOperation.pop();
    }
  }
  else if (currOperation.length == 2)
  {
    currOperation[1] = currOperation[1].slice(0, -1);
    if(currOperation[1].toString().length == 0)
    {
      currOperation.pop();
    }
  }
  else
  {
    currOperation[2] = currOperation[2].slice(0, -1);
    if(currOperation[2].toString().length == 0)
    {
      currOperation.pop();
    }
  }

  updateDisplay("");
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
