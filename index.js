var randomNumber = function () {
    var _a, _b;
    var numberStart = (_a = document.getElementById('numberStart')) === null || _a === void 0 ? void 0 : _a.value;
    var numberEnd = (_b = document.getElementById('numberEnd')) === null || _b === void 0 ? void 0 : _b.value;
    console.log('start: ' + numberStart + ' end: ' + numberEnd);
    var randomNumber = Math.floor(Math.random() * (parseInt(numberEnd) - parseInt(numberStart) + 1)) + parseInt(numberStart);
    console.log(randomNumber);
    return randomNumber;
};
var number = randomNumber();
console.log('num', number);
//if-else statement
document.getElementById('count').innerText = '3';
var guess = function () {
    var _a;
    var countOld = parseInt(document.getElementById('count').innerText);
    var num = parseInt((_a = document.getElementById('number')) === null || _a === void 0 ? void 0 : _a.value);
    var count = parseInt((document.getElementById('count').innerText = String(countOld || 0 - 1)));
    if (count < 0) {
        return;
    }
    if (num != number) {
        if (count == 0) {
            alert('Game over');
            return;
        }
        if (num > number) {
            document.getElementById('number').value = '';
            document.getElementById('number').focus();
            alert('Sai rồi, số của bạn lớn quá');
        }
        else if (num < number) {
            document.getElementById('number').value = '';
            document.getElementById('number').focus();
            alert('Sai rồi, số của bạn nhỏ quá');
        }
        return;
    }
    else {
        if (count === 2) {
            alert('Đúng rồi, bạn được 100đ');
        }
        if (count === 1) {
            alert('Đúng rồi, bạn được 50đ');
        }
        if (count === 0) {
            alert('Đúng rồi, bạn được 30đ');
        }
        return;
    }
};
//Loop statement
//document.getElementById('count')!.innerText = '10'
// const guess = () => {
//   let countOld = parseInt(document.getElementById('count')!.innerText);
//   let num = parseInt(
//     (document.getElementById('number') as HTMLInputElement)?.value
//   );
//   let count = parseInt(
//     (document.getElementById('count')!.innerText = String(countOld || 0 - 1))
//   );
//   for (let index = 0; index < count; index++) {
//     if (num != number) {
//       if (num > number) {
//         (document.getElementById('number') as HTMLInputElement).value = '';
//         (document.getElementById('number') as HTMLInputElement).focus();
//         alert('Sai rồi, số của bạn lớn quá');
//       } else if (num < number) {
//         (document.getElementById('number') as HTMLInputElement).value = '';
//         (document.getElementById('number') as HTMLInputElement).focus();
//         alert('Sai rồi, số của bạn nhỏ quá');
//       }
//       return;
//     } else {
//       alert(`Đúng rồi, bạn được ${100 - 10 * (10 - count - 1)}đ`);
//       return;
//     }
//   }
//   alert('Game over');
//   return;
// };
