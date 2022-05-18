// 題目一：星星顯示
function createStar(num) {
    const array = [];
    for (let i = 0; i < num; i++) {
        array.push('*');
    };
    return array.join("");
};

// 題目二：反轉陣列
function reverseAry(array) {
    return array.reverse();
};

// 題目三：陣列轉字串
function aryToString(array) {
    return array.reverse().join(",");
}

// 題目四：進階題：雙 for 迴圈
function multiplication(num) {
    for (let i = 2; i < num + 1; i++) {
        for (let j = 1; j < i + 1; j++) {
            console.log(`${i}x${j}=${i * j}`)
        };
    };
};