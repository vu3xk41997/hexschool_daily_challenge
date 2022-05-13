// 題目一：成年計算機
function checkAdult(age) {
    if (age < 20) {
        return "未成年";
    } else {
        return "成年";
    };
};

// 題目二：法定性行為年紀計算機(16歲)
function canSex(age, gender) {
    if (age < 16 && (gender == "female" || gender == "male")) {
        return "你還不行哦~";
    } else {
        return "可以色色";
    };
};

// 題目三：滿 300 即可符合優惠條件，能使用 50 元折價券
function buy(price) {
    if (price > 300) {
        return `符合優惠券資格，費用是 ${price - 50}`;
    } else if (price == 300) {
        return `剛好符合資格，費用是 ${price - 50}`;
    } else if (price < 300 && price > 0) {
        return `不優惠券資格，費用是 ${price}`;
    } else if (price == 0) {
        return "...你來亂的嗎？";
    } else {
        return "再鬧我就生氣了哦~";
    };
};

// 進階題: 是否為質數
function isPrime(number) {
    if (number > 100) {
        return "我只能算 100 以內的質數計算，原諒我QQ";
    } else if (number <= 0) {
        return "無法判別";
    } else {
        if (number < 3) {
            if (n > 1) {
                return "是質數";
            } else {
                return "不是質數";
            };
        } else if (number % 2 === 0 || number % 3 === 0) {
            return "不是質數"
        } else if (number < 25) {
            return "是質數";
        };
        let i = 5;
        while (i * i <= number ) {
            if (number % i === 0 || number % (i + 2) === 0) {
                return "不是質數";
            };
            i += 6;
        };
        return "是質數";
    };
};