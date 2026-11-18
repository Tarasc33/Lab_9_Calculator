const display = document.getElementById('display');

const buttons = document.querySelectorAll('.symobols button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = '';
    } else if (value === 'DEL') {
      display.value = display.value.slice(0, -1);
    } else if (value === '=') {
      if (display.value.trim() !== '') {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Помилка';
        }
      }
    } else {
      if (display.value === 'Помилка') {
        display.value = '';
      }
      display.value += value;
    }
  });
});