function send() {
  let type = document.getElementById('type').value;
  let area = document.getElementById('area').value;
  let phone = document.getElementById('phone').value;

  let price = area * 150;

  let text = `Заявка SPAZIO:
Тип: ${type}
Площадь: ${area} м2
Цена: ${price} MDL
Телефон: ${phone}`;

  window.open(`https://t.me/share/url?text=${encodeURIComponent(text)}`);
}
