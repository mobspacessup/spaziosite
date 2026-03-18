let currentStep = 1;
let data = {};

function nextStep(step, value) {

  if (value) data.type = value;

  if (step === 2) {
    let area = document.getElementById('area').value;
    if (!area) return alert('Введите площадь');

    data.area = area;

    let price = area * 150;
    document.getElementById('priceBox').innerHTML =
      `Примерная цена: ${price} MDL`;
  }

  document.querySelector(`.step[data-step="${step}"]`).classList.remove('active');
  document.querySelector(`.step[data-step="${step + 1}"]`).classList.add('active');

  currentStep++;
  document.getElementById('progress').style.width = (currentStep * 33) + '%';
}

function send() {
  let phone = document.getElementById('phone').value;
  data.phone = phone;

  let text = `Заявка SPAZIO:
Тип: ${data.type}
Площадь: ${data.area} м2
Цена: ${data.area * 150} MDL
Телефон: ${phone}`;

  window.open(`https://t.me/share/url?text=${encodeURIComponent(text)}`);
}
