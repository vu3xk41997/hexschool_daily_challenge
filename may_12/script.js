// 題目一：字串輸出
function callString(string) {
    return string.split("").join("-");
};

// 題目二：字串數量
function checkFiveWord(string) {
    if (string.length >= 5) {
        return string.slice(0,2);
    } else {
        return string;
    };
};

// 題目三：函式強制正整數相乘
function multiply(...args) {
    return args.reduce(function(acc,cur) {
        return Math.abs(acc * cur);
    });
};