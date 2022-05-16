// 題目一：日幣計算機 (1:0.32)
function TWDtoJPY(number) {
    if (typeof number == "string") {
        return "當我看不懂字串？？";
    } else if (number <= 0) {
        return "...沒錢別來亂";
    } else {
        return `你換到的日幣有：${number / 0.32}`;
    };
};

// 題目二：匯率計算機
function TWDtoAnother(number, currency) {
    if (currency == "USD") {
        return number * 29;
    } else if (currency == "HKD") {
        return number * 3;
    } else if (currency == "GBP") {
        return number * 35;
    } else {
        return "...";
    };
};

// 題目三：BMI 計算機
function BMI(height, weight) {
    let value = weight / ((height / 100) ** 2);
    if (value >= 35) {
        return "重度肥胖";
    } else if (value >= 30) {
        return "中度肥胖";
    } else if (value >= 27) {
        return "輕度肥胖";
    } else if (value >= 24) {
        return "過重";
    } else if (value >= 18.5) {
        return "正常";
    } else {
        return "過輕";
    };
};

// 進階題: 字串切割+if
// isPrime
function isPrime (n) {
    if (n < 3) return n > 1;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    else if (n < 25) return true;
    let i = 5;
    while (i * i <= n ) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
};

function sum(string) {
    let array = string.split(',').map(Number);
    if (isPrime(array[0])) {
        return array[1] + array[2];
    } else if (array[0] % 2 == 0) {
        return array[1] - array[2];
    } else {
        return array[1] * array[2];
    };
};