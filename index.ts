const randomNumber = (): number => {
  let numberStart = (document.getElementById('numberStart') as HTMLInputElement)
    ?.value;
  let numberEnd = (document.getElementById('numberEnd') as HTMLInputElement)
    ?.value;
  console.log('start: ' + numberStart + ' end: ' + numberEnd);
  let randomNumber: number =
    Math.floor(
      Math.random() * (parseInt(numberEnd) - parseInt(numberStart) + 1)
    ) + parseInt(numberStart);

  console.log(randomNumber);

  return randomNumber;
};

let number = randomNumber();

console.log('num', number);

//if-else statement
document.getElementById('count')!.innerText = '3'
const guess = () => {
  let countOld: number = parseInt(document.getElementById('count')!.innerText);

  let num = parseInt(
    (document.getElementById('number') as HTMLInputElement)?.value
  );
  let count = parseInt(
    (document.getElementById('count')!.innerText = String(countOld || 0 - 1))
  );

  if (count < 0) {
    return;
  }

  if (num != number) {
    if (count == 0) {
      alert('Game over');
      return;
    }

    if (num > number) {
      (document.getElementById('number') as HTMLInputElement).value = '';
      (document.getElementById('number') as HTMLInputElement).focus();
      alert('Sai rồi, số của bạn lớn quá');
    } else if (num < number) {
      (document.getElementById('number') as HTMLInputElement).value = '';
      (document.getElementById('number') as HTMLInputElement).focus();
      alert('Sai rồi, số của bạn nhỏ quá');
    }
    return;
  } else {
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
