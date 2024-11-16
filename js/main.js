// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". 
// При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці. ⬇️
let drinkSelect = document.getElementById('drink');
    let messageDiv = document.getElementById('message');


    drinkSelect.addEventListener('change', () => {
        let selectedDrink = drinkSelect.value;


      switch (selectedDrink) {
        case 'Кава':
          messageDiv.textContent = 'Ваш вибір: Кава';
          break;
        case 'Чай':
          messageDiv.textContent = 'Ваш вибір: Чай';
          break;
        case 'Сік':
          messageDiv.textContent = 'Ваш вибір: Сік';
          break;
        default:
          messageDiv.textContent = '';
      }
    });

// Створити розмітку з полем введення, що приймає рядок та кнопкою.
//  При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний. ⬇️
let dayInput = document.getElementById('dayInput');
    let checkButton = document.getElementById('checkButton');
    let text = document.getElementById('message');

    checkButton.addEventListener('click', () => {
      let day = dayInput.value.toLowerCase().trim(); 

      switch (day) {
        case 'понеділок':
        case 'вівторок':
        case 'середа':
        case 'четвер':
        case 'пʼятниця':
          text.textContent = 'Це робочий день. Давай работать!';
          break;
        case 'субота':
        case 'неділя':
          text.textContent = 'Це вихідний день. Ох як добре, ввіддихай)';
          break;
        default:
          text.textContent = 'Введіть нормальний день, шо за люди такі, навіть дні тижня незнають 😡';
      }
    });

// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць. ⬇️

let monthInput = document.getElementById('monthInput');
    let checkBut = document.getElementById('checkBut'); 
    let message = document.getElementById('message');

    checkBut.addEventListener('click', () => {
      let month = parseInt(monthInput.value.trim());

      switch (month) {
        case 12:
        case 1:
        case 2:
          message.textContent = 'Це зима. Не холодно їсти морозиво? Я все бачу';
          break;
        case 3:
        case 4:
        case 5:
          message.textContent = 'Це весна. Угу угу';
          break;
        case 6:
        case 7:
        case 8:
          message.textContent = 'Це літо. Не жарко пити каву? Я все бачу';
          break;
        case 9:
        case 10:
        case 11:
          message.textContent = 'Це осінь. Ну так собі, угу угу';
          break;
        default:
          message.textContent = 'Введіть нормальне число місяця, шо за люді такі 😡';
      }
    });

//Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці. ⬇️

let monthInputTwo = document.getElementById('monthInputTwo');
let checkButtonTwo = document.getElementById('checkButtonTwo');
let messageTwo = document.getElementById('messageTwo');

checkButtonTwo.addEventListener('click', () => {
  let month = parseInt(monthInputTwo.value.trim());
  let days;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;  
      break;
    default:
      messageTwo.textContent = 'Введіть нормальне число місяця, шо за люді такі 😡';
      return;
  }

  messageTwo.textContent = `Номер місяця: ${month}, в цьому місяці ${days} днів. 🦅`;
});
// Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. 
// При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".  ⬇️

let colorInput = document.getElementById('colorInput');
let verifyButton = document.getElementById('verifyButton');
let responseMessage = document.getElementById('responseMessage');

verifyButton.addEventListener('click', () => {
  let color = colorInput.value.trim().toLowerCase();

  switch (color) {
    case 'червоний':
      responseMessage.textContent = 'Стоп';
      break;
    case 'зелений':
      responseMessage.textContent = 'Йти';
      break;
    case 'жовтий':
      responseMessage.textContent = 'Чекати';
      break;
    default:
      responseMessage.textContent = 'Введи нормальний колір: червоний, зелений або жовтий. Шо за люді такі 😡';
  }
});
// Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". 
// При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль. ⬇️

let numberOne = document.getElementById('numberOne');
let numberTwo = document.getElementById('numberTwo');
let operation = document.getElementById('operation');
let calcButton = document.getElementById('calc');
let resultDiv = document.getElementById('result');

calcButton.addEventListener('click', () => {
  let num1 = parseFloat(numberOne.value);
  let num2 = parseFloat(numberTwo.value);
  let op = operation.value;

  if (op === '/' && num2 === 0) {
    resultDiv.textContent = 'Не можна ділити на нуль! Ти що у першому класі математику прогулював?';
    return;
  }

  let result;


  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      resultDiv.textContent = 'Невідома операція. Вибери нормальну, шо за люді такі 😡';
      return;
  }

  resultDiv.textContent = `Результат 🦅: ${result}`;
});




  