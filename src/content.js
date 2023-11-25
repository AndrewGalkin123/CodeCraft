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
            "const newLength = arr.push(4, 5); // newLength = 5, arr = [1, 2, 3, 4, 5]",
        ],
    },
    {
        method: "arr.shift()",
        description: "Удаляет первый элемент из массива и возвращает его.",
        examples: [
            "const arr = [1, 2, 3];",
            "const firstElement = arr.shift(); // firstElement = 1, arr = [2, 3]",
        ],
    },
    {
        method: "arr.unshift()",
        description: "Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.",
        examples: [
            "const arr = [2, 3];",
            "const newLength = arr.unshift(0, 1); // newLength = 4, arr = [0, 1, 2, 3]",
        ],
    },
    {
        method: "arr.slice(start, end)",
        description: "Возвращает новый массив, содержащий копию части исходного массива от start до end (не включая end).",
        examples: [
            "const arr = [1, 2, 3, 4, 5];",
            "const slicedArr = arr.slice(1, 4); // slicedArr = [2, 3, 4]",
        ],
    }
    
];

export default content;


