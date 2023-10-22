const num1 = Number(prompt('Enter number 1: '));
const num2 = Number(prompt('Enter number 2'));
const operator = prompt('Select operation to perform +, -, *, /: ')



if (operator === '+') {
    const resultAdd = num1 + num2;
    document.querySelector('.add').innerHTML = `Sum of ${num1} and ${num2} is: ${resultAdd}`;
    
} else if (operator === '-') {
    const resultSub = num1 - num2;
    document.querySelector('.sub').innerHTML = `Subtraction of ${num1} and ${num2} is: ${resultSub}`;
    
} else if (operator === '*') {
    const resultMul = num1 * num2;
    document.querySelector('.mul').innerHTML = `Multiplication of ${num1} and ${num2} is: ${resultMul}`;
    
} else {
    const resultDiv = num1 / num2;
    document.querySelector('.div').innerHTML = `Division of ${num1} and ${num2} is: ${resultDiv}`;

}


const ticketPrice = 600;
document.querySelector('.ticket-price').innerHTML = `Ticket price for 5 ticket is: ${ticketPrice * 5}`;

function printTable () {
    let tableHtml = '';
    let i = 1;
    while (i <= 10) {
        const table = i * 4;
        tableHtml +=
        `
        <div>
            4 * ${i} = ${table}
        </div>
        `;
        document.querySelector('.table').innerHTML = tableHtml;
        i++;
    }
}

printTable();