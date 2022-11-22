// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  
  // Ваш код
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } else if(arr[i] < min) {
      min = arr[i];
    }
    sum = (arr[i] + sum);
    
    };
    avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}


//Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код()
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

  return sum;
}

arrOfArr=[[1, 2, 3, 4], [10, 20, 10, -20]];

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  
  // Ваш код
  for (let i = 0; i < arrOfArr.length; i++) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }

  return max;

}


// Задание 3
function worker2(arr) {

  // Ваш код
  let sumMin = arr[0];
  let sumMax = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (sumMin > arr[i]) {
    sumMin = arr[i];
  } else if (sumMax < arr[i]) {
    sumMax = arr[i]
  }
}
return(Math.abs(sumMax - sumMin))
}