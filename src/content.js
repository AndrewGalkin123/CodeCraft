const content = [
    {
        method: "arr.pop()",
        description: ["В языке программирования JavaScript метод pop() используется для удаления последнего элемента из конца массива и возвращения этого элемента. Давайте рассмотрим его подробнее с примерами.",
            "Метод pop() изменяет оригинальный массив, удаляя его последний элемент. Если массив пуст, то pop() вернет undefined. Этот метод полезен, например, при реализации стека, где элементы добавляются и удаляются только с одного конца."],
        syntax: "var удаленныйЭлемент = массив.pop();",
        basicExample: [
            "var fruits = ['яблоко', 'груша', 'банан', 'апельсин'];",
            "var удаленныйФрукт = fruits.pop();",
            "console.log('Удаленный фрукт:', удаленныйФрукт);",
            "console.log('Массив после pop:', fruits);"
        ],
        basicExampleResult: [
            "Удаленный фрукт: апельсин",
            "Массив после pop: [ 'яблоко', 'груша', 'банан' ]"

        ],
        dynamicExample: [
            "var numbers = [1, 2, 3, 4, 5];",
            "while (numbers.length > 0) {",
            "    var удаленныйЭлемент = numbers.pop();",
            "    console.log('Удаленный элемент:', удаленныйЭлемент);",
            "    console.log('Массив после pop:', numbers);",
            "}"
        ],
        dynamicExampleResult: [
            "Удаленный элемент: 5",
            "Массив после pop: [ 1, 2, 3, 4 ]",
            "Удаленный элемент: 4",
            "Массив после pop: [ 1, 2, 3 ]",
            "Удаленный элемент: 3",
            "Массив после pop: [ 1, 2 ]",
            "Удаленный элемент: 2",
            "Массив после pop: [ 1 ]",
            "Удаленный элемент: 1",
            "Массив после pop: []"
        ]
    },
    {
        method: "arr.push()",
        description: ["Добавляет один или несколько элементов в конец массива и возвращает новую длину массива.",
            "Метод push() полезен, когда необходимо динамически расширять массив, добавлять элементы в конец и получать обновленную длину массива."],
        syntax: "const newLength = массив.push(элемент1, элемент2, ...);",
        basicExample: [
            "const arr = [1, 2, 3];",
            "const newLength = arr.push(4, 5);",
            "// newLength = 5, arr = [1, 2, 3, 4, 5]"
        ],
        basicExampleResult: [
            "Новая длина массива: 5",
            "Массив после push: [1, 2, 3, 4, 5]"
        ],
        dynamicExample: [
            "const colors = ['red', 'blue'];",
            "const addedColors = ['green', 'yellow'];",
            "const totalLength = colors.push(...addedColors);",
            "// totalLength = 4, colors = ['red', 'blue', 'green', 'yellow']"
        ],
        dynamicExampleResult: [
            "Новая длина массива: 4",
            "Массив после push: ['red', 'blue', 'green', 'yellow']"
        ]
    },
    {
        method: "arr.shift()",
        description: [
            "Удаляет первый элемент из массива и возвращает его значение.",
            "Метод shift() полезен, когда необходимо удалить первый элемент из массива и обновить его длину."
        ],
        syntax: "const removedElement = массив.shift();",
        basicExample: [
            "const arr = [1, 2, 3];",
            "const removedElement = arr.shift();",
            "// removedElement = 1, arr = [2, 3]"
        ],
        basicExampleResult: [
            "Удаленный элемент: 1",
            "Массив после shift: [2, 3]"
        ],
        dynamicExample: [
            "const colors = ['red', 'blue', 'green', 'yellow'];",
            "const removedColor = colors.shift();",
            "// removedColor = 'red', colors = ['blue', 'green', 'yellow']"
        ],
        dynamicExampleResult: [
            "Удаленный элемент: 'red'",
            "Массив после shift: ['blue', 'green', 'yellow']"
        ]
    },
    {
        method: "arr.unshift()",
        description: [
            "Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.",
            "Метод unshift() полезен, когда необходимо динамически расширять массив, добавлять элементы в начало и получать обновленную длину массива."
        ],
        syntax: "const newLength = массив.unshift(элемент1, элемент2, ...);",
        basicExample: [
            "const arr = [1, 2, 3];",
            "const newLength = arr.unshift(4, 5);",
            "// newLength = 5, arr = [4, 5, 1, 2, 3]"
        ],
        basicExampleResult: [
            "Новая длина массива: 5",
            "Массив после unshift: [4, 5, 1, 2, 3]"
        ],
        dynamicExample: [
            "const colors = ['blue', 'green', 'yellow'];",
            "const addedColors = ['red', 'purple'];",
            "const totalLength = colors.unshift(...addedColors);",
            "// totalLength = 5, colors = ['red', 'purple', 'blue', 'green', 'yellow']"
        ],
        dynamicExampleResult: [
            "Новая длина массива: 5",
            "Массив после unshift: ['red', 'purple', 'blue', 'green', 'yellow']"
        ]
    },
    {
        method: "arr.slice()",
        description: [
            "В JavaScript метод slice() используется для извлечения части массива или строки. Этот метод не изменяет исходный массив или строку, а возвращает новый массив или строку, содержащий выбранные элементы.",
            "Обратите внимание, что slice() не изменяет оригинальный массив или строку. Если вам нужно изменить исходный массив, вы можете использовать метод splice() для удаления или вставки элементов."
        ],
        syntax: "const newArray = массив.slice(начальныйИндекс, конечныйИндекс);",
        basicExample: [
            "const arr = [1, 2, 3, 4, 5];",
            "const slicedArray = arr.slice(1, 4);",
            "// slicedArray = [2, 3, 4], arr не изменен",
            "",
            "",
            "let str = 'Hello, World!'",
            "let slicedStr = str.slice(1, 7);"
        ],
        basicExampleResult: [
            "Новый массив: [2, 3, 4]",
            "Исходный массив: [1, 2, 3, 4, 5]",
            "",
            "console.log(slicedStr); // Вывод: 'ello, '"
        ],
        dynamicExample: [
            "const colors = ['red', 'blue', 'green', 'yellow'];",
            "const selectedColors = colors.slice(1, 3);",
            "// selectedColors = ['blue', 'green'], colors не изменен"
        ],
        dynamicExampleResult: [
            "Новый массив: ['blue', 'green']",
            "Исходный массив: ['red', 'blue', 'green', 'yellow']"
        ]
    },
    {
        method: "arr.lastIndexOf(element)",
        description: [
            "Метод lastIndexOf() в JavaScript используется для поиска последнего вхождения определенного элемента в массиве или строки. Метод возвращает индекс последнего вхождения элемента или -1, если элемент не найден.",
            "Метод lastIndexOf() также может принимать второй аргумент, который указывает начальную позицию поиска. Если этот аргумент отрицателен, поиск осуществляется от конца массива или строки.В этом примере поиск начинается с индекса -2, что означает, что будет произведен поиск с конца массива, и первым проверяемым элементом будет 4."
        ],
        syntax: "const lastIndex = массив.lastIndexOf(искомыйЭлемент, начальныйИндекс);",
        basicExample: [
            "const arr = [1, 2, 3, 2, 4, 2, 5];",
            "const lastIndexOfTwo = arr.lastIndexOf(2);",
            "// lastIndexOfTwo = 5, т.к. последнее вхождение 2 находится по индексу 5"
        ],
        basicExampleResult: [
            "Последний индекс элемента 2: 5",
            "Исходный массив: [1, 2, 3, 2, 4, 2, 5]"
        ],
        dynamicExample: [
            "const colors = ['red', 'blue', 'green', 'blue', 'yellow'];",
            "const lastIndexBlue = colors.lastIndexOf('blue', 3);",
            "// lastIndexBlue = 1, т.к. последнее вхождение 'blue' до индекса 3 находится по индексу 1"
        ],
        dynamicExampleResult: [
            "Последний индекс элемента 'blue': 1",
            "Исходный массив: ['red', 'blue', 'green', 'blue', 'yellow']"
        ]
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
    {
        method: "arr.find(callback)",
        description: "Возвращает значение первого элемента массива, удовлетворяющего условию, заданному в переданной функции.",
        examples: [
            "const arr = [1, 2, 3, 4, 5];",
            "const firstEven = arr.find(num => num % 2 === 0);",
            "firstEven = 2"
        ],
    },
    {
        method: "arr.findIndex(callback)",
        description: "Возвращает индекс первого элемента массива, удовлетворяющего условию, заданному в переданной функции. Если элемент не найден, возвращает -1.",
        examples: [
            "const arr = [1, 2, 3, 4, 5];",
            "const indexOfFirstEven = arr.findIndex(num => num % 2 === 0);",
            "indexOfFirstEven = 1"
        ],
    },
    {
        method: "arr.includes(element)",
        description: "Проверяет, содержит ли массив указанный элемент. Возвращает true, если элемент найден, иначе false.",
        examples: [
            "const arr = [1, 2, 3, 4, 5];",
            "const includesThree = arr.includes(3);",
            "includesThree = true"
        ],
    },
    {
        method: "arr.flat(depth)",
        description: "Создает новый массив, в котором все подмассивы внутри исходного массива объединены в один уровень. Глубина объединения может быть указана с помощью параметра depth.",
        examples: [
            "const arr = [1, [2, [3, 4]], 5];",
            "const flatArray = arr.flat(2);",
            "flatArray = [1, 2, 3, 4, 5]"
        ],
    },
    {
        method: "str.trim()",
        description: "Удаляет пробельные символы с начала и конца строки.",
        examples: [
            "const str = '   Hello, World!   ';",
            "const trimmedStr = str.trim();",
            "trimmedStr = 'Hello, World!'"
        ],
    },
    {
        method: "str.substring(start, end)",
        description: "Возвращает подстроку строки между индексами start и end (не включительно).",
        examples: [
            "const str = 'Hello, World!';",
            "const substring = str.substring(7, 12);",
            "substring = 'World'"
        ],
    },
    {
        method: "str.substr(start, length)",
        description: "Возвращает подстроку строки, начиная с индекса start и имеющую длину length.",
        examples: [
            "const str = 'Hello, World!';",
            "const substr = str.substr(7, 5);",
            "substr = 'World'"
        ],
    },
    {
        method: "str.replace(searchValue, replaceValue)",
        description: "Заменяет первое вхождение searchValue в строке на replaceValue.",
        examples: [
            "const str = 'Hello, World!';",
            "const replacedStr = str.replace('World', 'GPT');",
            "replacedStr = 'Hello, GPT!'"
        ],
    },
    {
        method: "str.split(separator)",
        description: "Разделяет строку на массив подстрок, используя указанный разделитель.",
        examples: [
            "const str = 'apple,orange,banana';",
            "const fruitArray = str.split(',');",
            "fruitArray = ['apple', 'orange', 'banana']"
        ],
    },
    {
        method: "Math.random()",
        description: "Возвращает псевдослучайное число от 0 (включительно) до 1 (не включительно).",
        examples: [
            "const randomNum = Math.random();",
            "// Example output: 0.8543713276878362"
        ],
    },
    {
        method: "Math.floor(num)",
        description: "Возвращает наибольшее целое число, меньшее или равное указанному числу.",
        examples: [
            "const roundedDown = Math.floor(3.8);",
            "roundedDown = 3"
        ],
    },
    {
        method: "Math.ceil(num)",
        description: "Возвращает наименьшее целое число, большее или равное указанному числу.",
        examples: [
            "const roundedUp = Math.ceil(3.2);",
            "roundedUp = 4"
        ],
    },
    {
        method: "Math.round(num)",
        description: "Возвращает ближайшее целое число, округляя вверх или вниз в зависимости от десятичной части.",
        examples: [
            "const rounded = Math.round(3.5);",
            "rounded = 4"
        ],
    }
];

export default content;


