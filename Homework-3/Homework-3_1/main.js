const tempUser = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
alert(`Цельсия: ${tempUser}, Фаренгейт: ${forengeit(tempUser)}`);
function forengeit (temp1,temp2) {
    temp2 = Math.round(9/5 * temp1 + 32);
    return temp2;
}