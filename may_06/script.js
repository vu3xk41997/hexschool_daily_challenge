// 題目一：比大小
function higher(num1, num2) {
    if (num1 > num2) {
        return true
    } else {
        return false
    }
}

// 題目二：布林反轉
function booleanToggle(bool) {
    if (bool == true) {
        return false
    } else {
        return true
    }
}

// 題目三：型別判斷
function checkType(variable) {
    return typeof(variable)
}

// 題目四：打八折後，是否總價大於 100 元
function onSale(num) {
    if ((num * 0.8) > 100) {
        return true
    } else {
        return false
    }
}

// 題目五：是否大於 200，且符合會員條件
function checkVIP(num, bool) {
    if (num > 200 && bool == true) {
        return true
    } else {
        return false
    }
}