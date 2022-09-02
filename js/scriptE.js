/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

options.makeTest();

const {
    border,
    bg
} = options.colors;

console.log(border);

console.log(Object.keys(options).length);

/* console.log(options.name);

delete options.name;

console.log(options); */

let counter = 0;

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arr = [11, 233, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function (item, i, arr) {
    console.log(`${i}:${item} внутри массива ${arr}`);
});

arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let v of arr) {
    console.log(v);
}

const str = prompt("Сплит", "");
const products = str.split(" ");
products.sort();
console.log(products.join("; "));

function compareNum(a, b) {
    return a - b;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    bb: 12,
    v: 33333
};

const clone = Object.assign({}, add);

clone.v = 1;

console.log(add);
console.log(clone);


const oldarr = ['a', 'b', 'c'];
const newarr = oldarr.slice();

newarr[1] = 'g';

console.log(oldarr);
console.log(newarr);


const video = ['youtube','vimeo','rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk','facebook'];

console.log(internet);



const newArray = [...newarr];
newArray[2] = '33';

console.log(newArray);


const qwerty = {
    1: 1,
    2: 2
};

const newQ = {...qwerty};

newQ[1] = 11;

console.log(qwerty);
console.log(newQ);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);

/* Object.setPrototypeOf(jonh, soldier); */

jonh.sayHello();











///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////