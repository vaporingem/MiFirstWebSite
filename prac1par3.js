function multi() {
  const num = prompt('Ingresa un número (1-10)', '1');
  if (num !== null && !isNaN(num) && num >= 1 && num <= 10) {
    const table = generateMultiplicationTable(num);
    displayMultiplicationTable(table);
  } else {
    alert('Por favor, ingresa un número válido entre 1 y 10.');
  }
}

function generateMultiplicationTable(num) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${num} x ${i} = ${num * i}`);
  }
  return table;
}

function displayMultiplicationTable(table) {
  const tableElement = document.getElementById('multiplicationTable');
  tableElement.innerHTML = table.join('<br>');
}