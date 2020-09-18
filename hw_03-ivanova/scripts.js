function index() {
  let height = Number(prompt("Введите свой рост в сантиметрах")) || 100;
  let weight = Number(prompt("Введите свой вес в килограммах")) || 100;

  let bmi = weight / (height / 100) ** 2;
  alert(bmi);
}

index();
