const checkTheString = (str, strLength) => {

  return str.length <= strLength
};

console.log(checkTheString('проверяемая строка', 20));
console.log(checkTheString('проверяемая строка', 18));
console.log(checkTheString('проверяемая строка', 10));

const isTheStringApalindrome = (str) => {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  const newStrReverse = newStr.split('').reverse().join('');
  return newStr === newStrReverse;

};

console.log(isTheStringApalindrome('Лёша на полке клопа нашёл ') ? 'строка  является палиндромом' : 'строка ne является палиндромом');
console.log(isTheStringApalindrome('Создать новую пустую строку и сохранить её в ещё одну переменную'));
console.log(isTheStringApalindrome('А роза упала на лапу Азора'));
console.log(isTheStringApalindrome('топот'));
console.log(isTheStringApalindrome('ДовОд'));
console.log(isTheStringApalindrome('Кекс'));

const extractsAnIntFromAstring = (value) => {
  let str;
  str = (typeof(value) === 'number') ? value.toString() : value;
  let newStr = '';
  for(let i = 0; i < str.length; i++) {

    newStr += (!Number.isNaN(parseInt(str[i]), 10)) ? str[i].toString() : '';
  }
  return parseInt(newStr, 10);
};

console.log(extractsAnIntFromAstring('20 23 год'));
console.log(extractsAnIntFromAstring('ECMAScript 2022'));
console.log(extractsAnIntFromAstring('1 кефир, 0.5 батона'));
console.log(extractsAnIntFromAstring('агент 007'));
console.log(extractsAnIntFromAstring('а я томат'));

console.log(extractsAnIntFromAstring(2023));
console.log(extractsAnIntFromAstring(-1));
console.log(extractsAnIntFromAstring(1.5));
