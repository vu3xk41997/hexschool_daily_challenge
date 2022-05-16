// 題目一：有沒有打折
function sale(price) {
    if (price < 2000) {
        return price;
    } else if (price < 3000) {
        return price * 0.9;
    } else if (price < 4000) {
        return price * 0.8;
    } else {
        return price * 0.7;
    };
};

// 題目二：西元轉民國
function CEtoChinese(year) {
    if (year < 1912) {
        return "尚未建國";
    } else {
        return `民國${year - 1911}年`;
    };
};

// 題目三：年薪計算機
function annualSalary(salary, year) {
    if (year < 1) {
        return salary * 12;
    } else if (year < 5) {
        return salary * 13;
    } else {
        return salary * 13.3;
    };
};