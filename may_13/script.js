// 題目一：手機號碼是否正確
function checkPhoneNumber(string) {
    const regex = /(09)[0-9]{8}/;
    if (string.length == 10) {
        return regex.test(string);
    } else {
        return false;
    };
};

// 題目二：訂單編號
function checkFiveWord(string) {
    const regex = /B[0-9]{5}/;
    if (string.length == 6) {
        return regex.test(string);
    } else {
        return false;
    };
};

// 題目三：驗證密碼
function checkPassword(string) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(string);
};