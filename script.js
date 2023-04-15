const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const weight = document.querySelector('#weight').value;
  const height = document.querySelector('#height').value;

  const imc = (weight / (height * height)).toFixed(2);

  if (!isNaN(imc)) {
    const value = document.querySelector('#value');
    let description = "";
    value.classList.add('attention')

    document.querySelector('#infos').classList.remove('hidden')

    if (imc < 18.5) {
      description = 'Cuidado! Você está abaixo do peso!.'
    }
    else if (imc >= 18.5 && imc <= 25) {
      description = 'Você está no peso ideal !'
      value.classList.remove('attention')
      value.classList.add('normal')
    }
    else if (imc > 25 && imc <= 30) {
      description = 'Cuidado !, Você está com sobrepreso!'
    }
    else if (imc > 30 && imc <= 35) {
      description = 'Cuidado !, Você está com obesidade severa!'
    }
    else {
      description = 'Cuidado !, Você está com obesidade morbida!'
    };

    value.textContent = imc.replace(".", ",");
    document.querySelector('#description').textContent = description
  }
})

form.addEventListener('keypress', function (event) {
  if (event.key === 'press') {
    document.getElementById('#calculate').click();
  }
});