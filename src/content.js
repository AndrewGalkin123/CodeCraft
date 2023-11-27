const content = [
    {
        method: "arr.pop()",
        description: "Удаляет последний элемент из массива и возвращает его.",
        examples: [
            "const arr = [1, 2, 3];",
            "const lastElement = arr.pop();",
            "lastElement = 3, arr = [1, 2]"
        ],
    },
    {
        method: "arr.push()",
        description: "Добавляет один или несколько элементов в конец массива и возвращает новую длину массива.",
        examples: [
            "const arr = [1, 2, 3];",
            "const newLength = arr.push(4, 5);",
            "newLength = 5, arr = [1, 2, 3, 4, 5]"
        ],
    },
    {
        method: "arr.shift()",
        description: "Удаляет первый элемент из массива и возвращает его.",
        examples: [
            "const arr = [1, 2, 3];",
            "const firstElement = arr.shift();",
            "firstElement = 1, arr = [2, 3]"
        ],
    },
    {
        method: "arr.unshift()",
        description: "Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.",
        examples: [
            "const arr = [2, 3];",
            "const newLength = arr.unshift(0, 1);",
            "newLength = 4, arr = [0, 1, 2, 3]"
        ],
    },
    {
        method: "arr.slice(start, end)",
        description: "Возвращает новый массив, содержащий копию части исходного массива от start до end (не включая end).",
        examples: [
            "const arr = [1, 2, 3, 4, 5];",
            "const slicedArr = arr.slice(1, 4);",
            "slicedArr = [2, 3, 4]"
        ],
    },
    {
        method: "arr.lastIndexOf(element)",
        description: "Возвращает индекс последнего вхождения элемента в массиве. Если элемент не найден, возвращает -1.",
        examples: [
            "const arr = [1, 2, 3, 4, 2];",
            "const lastIndex = arr.lastIndexOf(2);",
            "lastIndex = 4"
        ],
    },
    {
        method: "arr.join(separator)",
        description: "Преобразует все элементы массива в строку, объединяя их с помощью указанного разделителя.",
        examples: [
            "const arr = [1, 2, 3];",
            "const joinedString = arr.join('-');",
            "joinedString = '1-2-3'"
        ],
    },
    {
        method: "arr.reverse()",
        description: "Изменяет порядок элементов в массиве на обратный.",
        examples: [
            "const arr = [1, 2, 3, 4];",
            "arr.reverse();",
            "arr = [4, 3, 2, 1]"
        ],
    },
    {
        method: "arr.indexOf(element)",
        description: "Возвращает индекс первого вхождения элемента в массиве. Если элемент не найден, возвращает -1.",
        examples: [
            "const arr = [1, 2, 3, 4, 2];",
            "const index = arr.indexOf(2);",
            "index = 1"
        ],
    },
    {
        method: "arr.concat(array2, array3, ...)",
        description: "Возвращает новый массив, объединяя текущий массив с другими массивами или значениями.",
        examples: [
            "const arr1 = [1, 2];",
            "const arr2 = [3, 4];",
            "const concatenatedArray = arr1.concat(arr2);",
            "concatenatedArray = [1, 2, 3, 4], arr1 = [1, 2], arr2 = [3, 4]"
        ],
    },
    {
        method: "str.toUpperCase()",
        description: "Преобразует все символы строки в верхний регистр.",
        examples: [
            "const str = 'hello';",
            "const upperCaseStr = str.toUpperCase();",
            "upperCaseStr = 'HELLO'"
        ],
    },
    {
        method: "str.toLowerCase()",
        description: "Преобразует все символы строки в нижний регистр.",
        examples: [
            "const str = 'Hello';",
            "const lowerCaseStr = str.toLowerCase();",
            "lowerCaseStr = 'hello'"
        ],
    },
    {
        method: "num.toString()",
        description: "Преобразует число в строку.",
        examples: [
            "const num = 42;",
            "const strNum = num.toString();",
            "strNum = '42'"
        ],
    },
    {
        method: "obj.hasOwnProperty(prop)",
        description: "Возвращает true, если объект содержит указанное свойство, иначе false.",
        examples: [
            "const obj = { name: 'John', age: 25 };",
            "const hasName = obj.hasOwnProperty('name');",
            "hasName = true"
        ],
    },
    {
        method: "arr.every(callback)",
        description: "Проверяет, удовлетворяют ли все элементы массива условию, заданному в переданной функции.",
        examples: [
            "const arr = [2, 4, 6, 8];",
            "const allEven = arr.every(num => num % 2 === 0);",
            "allEven = true"
        ],
    },
    {
        method: "arr.some(callback)",
        description: "Проверяет, удовлетворяет ли хотя бы один элемент массива условию, заданному в переданной функции.",
        examples: [
            "const arr = [1, 3, 5, 6];",
            "const hasEven = arr.some(num => num % 2 === 0);",
            "hasEven = true"
        ],
    },
    {
        method: "arr.filter(callback)",
        description: "Создает новый массив, включая все элементы, для которых переданная функция возвращает true.",
        examples: [
            "const arr = [1, 2, 3, 4, 5];",
            "const evenNumbers = arr.filter(num => num % 2 === 0);",
            "evenNumbers = [2, 4]"
        ],
    },
    {
        method: "arr.map(callback)",
        description: "Создает новый массив, содержащий результат вызова указанной функции для каждого элемента массива.",
        examples: [
            "const arr = [1, 2, 3];",
            "const squaredValues = arr.map(num => num * num);",
            "squaredValues = [1, 4, 9]"
        ],
    },
    {
        method: "arr.reduce(callback, initialValue)",
        description: "Применяет функцию к аккумулятору и каждому элементу массива (слева направо), сводя массив к одному значению.",
        examples: [
            "const arr = [1, 2, 3, 4];",
            "const sum = arr.reduce((acc, num) => acc + num, 0);",
            "sum = 10"
        ],
    },
    {
        method: "dateObject.toISOString()",
        description: "Возвращает строку в формате ISO (например, '2023-11-27T12:34:56.789Z').",
        examples: [
            "const now = new Date();",
            "const isoString = now.toISOString();",
            "isoString = '2023-11-27T12:34:56.789Z'"
        ],
    },
];

export default content;


