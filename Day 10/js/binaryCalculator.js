const resultEle = document.querySelector('#res');

let op1 = operator = op2 = '';

const renderResEle = () => {
   res.textContent = op1 + operator + op2;
}

const getOperator = (aOperator) => {
   operator = aOperator;
   renderResEle();
}

const appendZeroOne = (zeroOrOne) => {
   if (operator) {
      op2 += zeroOrOne;
   } else {
      op1 += zeroOrOne;
   }
   renderResEle();
}

const clearResult = () => {
   op1 = operator = op2 = '';
   renderResEle();
}

const eqls = () => {
   op1 = parseInt(op1, 2);
   op2 = parseInt(op2, 2);

   switch (operator) {
      case '+':
         op1 += op2;
         break;
      case '-':
         op1 -= op2;
         break;
      case '*':
         op1 *= op2;
         break;
      case '/':
         op1 /= op2;
         break;
      default:
         break;
   }

   op1 = parseInt(op1).toString(2);
   op2 = operator = '';

   renderResEle();
}