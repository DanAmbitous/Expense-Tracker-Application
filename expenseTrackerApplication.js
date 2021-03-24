const balance = document.getElementById('balance');
const incomeButton = document.getElementById('income');
const outcomeButton = document.getElementById('outcome');
const incomeList = document.getElementById('income-list');
const outcomeList = document.getElementById('outcome-list');
const clear = document.getElementById('clear');

document.addEventListener('click', (event) => {
  if (event.target.matches('#income')) {
    let incomeGroup = document.createElement('div');
    incomeGroup.setAttribute('class', 'datas')
    let title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    let incomeAmount = document.createElement('input');
    incomeAmount.setAttribute('type', 'number');
    incomeAmount.setAttribute('class', 'income-input');
    incomeAmount.setAttribute('placeholder', 'Income');
    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    let removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.setAttribute('class', 'btn btn-danger remove-income');
  
    incomeGroup.appendChild(title);
    incomeGroup.appendChild(incomeAmount);
    incomeGroup.appendChild(date);
    incomeGroup.appendChild(removeButton);
  
    incomeList.appendChild(incomeGroup);
  }

  if (event.target.matches('#outcome')) {
    let incomeGroup = document.createElement('div');
    incomeGroup.setAttribute('class', 'datas')
    let title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    let incomeAmount = document.createElement('input');
    incomeAmount.setAttribute('type', 'number');
    incomeAmount.setAttribute('class', 'outcome-input');
    incomeAmount.setAttribute('placeholder', 'Outcome');
    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    let removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.setAttribute('class', 'btn btn-danger remove-outcome');
  
    incomeGroup.appendChild(title);
    incomeGroup.appendChild(incomeAmount);
    incomeGroup.appendChild(date);
    incomeGroup.appendChild(removeButton);
  
    outcomeList.appendChild(incomeGroup);
  }

  if (event.target.matches('#clear')) {
    incomeList.innerHTML = "";
    outcomeList.innerHTML = "";
  }

  if (event.target.matches('.remove-income')) {
    event.target.parentElement.remove();
  }
  if (event.target.matches('.remove-outcome')) {
    event.target.parentElement.remove();
  }
}, false)

/*document.addEventListener('keyup', (event) => {
  if (event.target.matches('.income-input')) {
    let elements = document.querySelectorAll(".income-input");

    for (let i = 0; i < elements.length; i++) {
      console.log(totalValue);
      totalValue += Number(elements[i].value);

      balance.value = totalValue;
    }
  }

  if (event.target.matches('.outcome-input')) {
    let elements = document.querySelectorAll(".income-input");

    for (let i = 0; i < elements.length; i++) {
      totalValue -= Number(elements[i].value);
    
      balance.value = totalValue;
    }
  }
})*/