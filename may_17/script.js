// 題目一：依照文字描述物件
const family = {
    mom: "Mary",
    dad: "Bob",
    kids: ["John", "Tom", "Kate"],
    animals: {
        cat: 5,
        dog: 7,
        cow: 8,
        spider: 9,
    },
    mortgage: true
};

// 題目二：看圖設計物件
const room = {
    table: 1,
    chair: 6,
    people: 5,
    male: 2,
    female: 3,
    laptop: 5,
    plant: 2,
    shelf: 1,
    monitor: 1,
    postItNote: 46
};

// 題目三：擴充物件內容
const obj = {
    name:"",
    people: 3
};

function addKeyValue(key, item) {
    obj[key] = obj[key] + item;
    return obj;
};

// 題目四：進階題: 請宣告一個 object 函式，並用object()[2]()方式執行，並會 return 回傳 “hi”
function object() {
    return [
        () => {
            return "hello";
        },
        () => {
            return "hey";
        },
        () => {
            return "hi";
        }
    ];
};