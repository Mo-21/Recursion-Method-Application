//Fibonacci [0, 1, 1, 2, 3, 5, 8, 13, ...]

//with loops
const fibonacci = function (n) {
  if (n < 0) return;
  if (n === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};


// Recursion Method
function fibRecursive(n) {
  if (n < 2) {
    return n;
  } else {
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  }
}


// Merge Sort Algorithm to Sort an Array
function mergeSort(n) {
  if (n.length <= 1) {
    return n;
  }

  const middle = Math.floor(n.length / 2);
  const left = n.slice(0, middle);
  const right = n.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}