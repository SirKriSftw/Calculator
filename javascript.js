function operate( num1, operator, num2)
{
  let output = 0;
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
