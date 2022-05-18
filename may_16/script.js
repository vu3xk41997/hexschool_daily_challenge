// 題目一：陣列長度計算
function checkLength(array) {
    return array.length;
};

// 題目二：增減陣列內容
const ary = [];
function aryControl(action, item) {
    if (action == "增加") {
        ary.unshift(item);
    } else if (action == "刪除指定筆數") {
        ary.splice(item - 1, 1);
    };
    return ary;
};

// 題目三：for+陣列相加產生器，邏輯思考題
const numAry = [1,2,3,4,5];
function addAry(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        sum += numAry[i];
    };
    return sum;
};