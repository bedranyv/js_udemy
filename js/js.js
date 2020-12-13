const a = 10,
      b = 5;

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(a, b));

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * n;
    }
    return result;
}

console.log(pow(3, 3));

const arr = [1, 4, 3, 0, 4, 5, 4];

function kor() {
    let newarr = [];
    let newarri = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2)) {
            newarr[newarri] = arr[i];
            newarri++;
        }
    }

    let sum = 0;

    for (let x = 0; x < newarr.length; x++) {
        sum = sum + (newarr[x] * newarr[x]);
    }

    console.log(sum);
}

kor();





