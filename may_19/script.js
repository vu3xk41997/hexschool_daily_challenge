// 題目一： 函式 return 物件
function a() {
    return {
        hi: "hi",
        sayYo: "yo~",
        cry: "嗚嗚"
    };
}

// 題目二：陣列包函式
const b = [(num) => `你輸入的是${num}`];

// 題目三：物件包函式
const obj = {
    a: () => "你執行的是 a 函式",
    b: () => "你執行的是 b 函式"
}

// 題目四：進階題，arguments return function
function sum(...args) {
    let total = 0;
    args.forEach(e => total += e);
    if (args.length != 1) {
        return total;
    } else {
        return (args2) => total += args2;
    };
}
