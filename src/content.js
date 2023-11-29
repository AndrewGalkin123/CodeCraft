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
        //поменять тут немного 
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
            "let arr = [1, 2, 3, 4, 2, 5];",
            "let lastIndex = arr.lastIndexOf(2, -2);",

        ],
        dynamicExampleResult: [
            "console.log(lastIndex); // Вывод: 1",

        ]
    },
    {
        method: "arr.join()",
        description: [
            "В JavaScript метод join() применяется к массивам для объединения всех их элементов в одну строку. Этот метод принимает один аргумент - строку, которая будет использоваться в качестве разделителя между элементами массива в конечной строке. Результирующая строка будет содержать все элементы массива, разделенные указанным разделителем.",
            "Метод join() не изменяет сам массив, а возвращает новую строку, содержащую объединенные элементы."
        ],
        syntax: "const joinedString = массив.join(разделитель);",
        basicExample: [
            "const arr = ['apple', 'banana', 'orange'];",
            "const joinedString = arr.join(', ');",
            "// joinedString = 'apple, banana, orange'"
        ],
        basicExampleResult: [
            "Объединенная строка: 'apple, banana, orange'",
            "Исходный массив: ['apple', 'banana', 'orange']"
        ],
        dynamicExample: [
            "const dynamicArray = ['one', 'two', 'three'];",
            "const separator = prompt('Введите разделитель: ');",
            "const joinedString = dynamicArray.join(separator);",
            "// Пример ввода: separator = '-'; joinedString = 'one-two-three'"
        ],
        dynamicExampleResult: [
            "Объединенная строка: 'one-two-three'",
            "Исходный массив: ['one', 'two', 'three']"
        ]
    },
    {
        method: "arr.reverse()",
        description: [
            "Метод reverse() в JavaScript используется для изменения порядка элементов в массиве на противоположный. То есть, первый элемент становится последним, второй — предпоследним, и так далее. Этот метод изменяет оригинальный массив и не возвращает новый.",
            "Обратите внимание, что reverse() изменяет оригинальный массив, поэтому будьте осторожны при его применении, чтобы не потерять оригинальный порядок элементов, если это важно.Таким образом, метод reverse() является полезным инструментом при работе с массивами и обратным порядком их элементов."
        ],
        syntax: "массив.reverse();",
        basicExample: [
            "const arr = [1, 2, 3, 4, 5];",
            "arr.reverse();",
            "// arr = [5, 4, 3, 2, 1]"
        ],
        basicExampleResult: [
            "Массив после reverse: [5, 4, 3, 2, 1]"
        ],
        dynamicExample: [
            "const dynamicArray = ['apple', 'banana', 'orange'];",
            "const shouldReverse = confirm('Изменить порядок элементов?');",
            "if (shouldReverse) {",
            "   dynamicArray.reverse();",
            "   // Порядок измененного массива",
            "}"
        ],
        dynamicExampleResult: [
            "Массив после reverse (в зависимости от выбора пользователя): измененный порядок элементов или остается прежним."
        ]
    },
    {
        method: "arr.indexOf()",
        description: [
            "Метод indexOf() в JavaScript используется для поиска индекса (позиции) указанного элемента в массиве. Если элемент не найден, метод возвращает -1. Если элемент встречается несколько раз, indexOf() вернет индекс первого вхождения.",
            "Метод indexOf() также может принимать второй аргумент - начальный индекс для поиска"
        ],
        syntax: "const index = массив.indexOf(искомыйЭлемент, начальныйИндекс);",
        basicExample: [
            "const arr = [1, 2, 3, 2, 4, 2, 5];",
            "const indexOfTwo = arr.indexOf(2);",
            "// indexOfTwo = 1, т.к. первое вхождение 2 находится по индексу 1"
        ],
        basicExampleResult: [
            "Первый индекс элемента 2: 1",
            "Исходный массив: [1, 2, 3, 2, 4, 2, 5]"
        ],
        dynamicExample: [
            "const colors = ['red', 'blue', 'green', 'blue', 'yellow'];",
            "const searchColor = prompt('Введите цвет для поиска: ');",
            "const indexOfColor = colors.indexOf(searchColor);",
            "// indexOfColor содержит индекс найденного цвета или -1, если цвет не найден"
        ],
        dynamicExampleResult: [
            "Индекс найденного цвета (или -1, если цвет не найден) в зависимости от ввода пользователя."
        ]
    },
    {
        method: "arr.concat(array2, array3, ...)",
        description: [
            "Метод concat() в JavaScript применяется к массивам для объединения двух или более массивов, создавая новый массив, содержащий все элементы из исходных массивов. Он не изменяет оригинальные массивы, а возвращает новый массив.",
            "Метод concat() также может принимать несколько аргументов, не только массивов, но и отдельные элементы.Если вам нужно объединить массив с другими элементами, но не создавать новый массив, вы также можете использовать оператор распространения (...).Обратите внимание, что concat() не изменяет оригинальные массивы, поэтому исходные массивы остаются без изменений."
        ],
        syntax: "const newArray = массив.concat(элемент1, элемент2, ..., массив2, массив3, ...);",
        basicExample: [
            "const arr1 = [1, 2, 3];",
            "const arr2 = [4, 5, 6];",
            "const newArr = arr1.concat(arr2);",
            "// newArr = [1, 2, 3, 4, 5, 6]"
        ],
        basicExampleResult: [
            "Новый массив после concat: [1, 2, 3, 4, 5, 6]",
            "Исходные массивы: arr1 = [1, 2, 3], arr2 = [4, 5, 6]"
        ],
        dynamicExample: [
            "const colors1 = ['red', 'blue'];",
            "const colors2 = ['green', 'yellow'];",
            "const additionalColors = prompt('Введите дополнительные цвета через запятую:');",
            "const extraColorsArray = additionalColors.split(',');",
            "const combinedColors = colors1.concat(colors2, extraColorsArray);",
            "// combinedColors - новый массив, содержащий все цвета из исходных массивов и введенные пользователем дополнительные цвета"
        ],
        dynamicExampleResult: [
            "Новый массив после concat: сочетание всех цветов из исходных массивов и введенных пользователем дополнительных цветов."
        ]
    },
    {
        method: "str.toUpperCase()",
        description: [
            "Метод toUpperCase() в JavaScript применяется к строкам и используется для преобразования всех символов строки в верхний регистр. Этот метод не изменяет исходную строку, а возвращает новую строку, в которой все буквы переведены в верхний регистр.Метод toUpperCase() полезен, например, при сравнении строк без учета регистра или при необходимости преобразовать введенные пользователем данные в формат, удобный для сравнения.",
            "Обратите внимание, что метод toUpperCase() не изменяет оригинальную строку. Если вы хотите изменить оригинальную строку, то результат метода нужно присвоить обратно переменной.Таким образом, метод toUpperCase() предоставляет удобный способ преобразования всех символов строки в верхний регистр в JavaScript."
        ],
        syntax: "const uppercasedString = строка.toUpperCase();",
        basicExample: [
            "const originalString = 'Hello World';",
            "const uppercasedString = originalString.toUpperCase();",
            "// uppercasedString = 'HELLO WORLD'"
        ],
        basicExampleResult: [
            "Строка после toUpperCase: 'HELLO WORLD'",
            "Исходная строка: 'Hello World'"
        ],
        dynamicExample: [
            "const userInput = prompt('Введите текст:');",
            "const uppercasedUserInput = userInput.toUpperCase();",
            "// uppercasedUserInput содержит введенный текст в верхнем регистре"
        ],
        dynamicExampleResult: [
            "Строка после toUpperCase: содержит введенный пользователем текст в верхнем регистре."
        ]
    },
    {
        method: "str.toLowerCase()",
        description: [
            "Метод toLowerCase() в JavaScript также применяется к строкам и используется для преобразования всех символов строки в нижний регистр. Как и метод toUpperCase(), toLowerCase() также не изменяет исходную строку, а возвращает новую строку, в которой все буквы переведены в нижний регистр.",
            "Как и toUpperCase(), метод toLowerCase() полезен, например, при сравнении строк без учета регистра или при необходимости преобразовать введенные пользователем данные в формат, удобный для сравнения.Метод toLowerCase() и toUpperCase() являются методами, предоставляющими удобные способы работы с регистром символов в строках в языке JavaScript."
        ],
        syntax: "const lowercasedString = строка.toLowerCase();",
        basicExample: [
            "const originalString = 'Hello World';",
            "const lowercasedString = originalString.toLowerCase();",
            "// lowercasedString = 'hello world'"
        ],
        basicExampleResult: [
            "Строка после toLowerCase: 'hello world'",
            "Исходная строка: 'Hello World'"
        ],
        dynamicExample: [
            "const userInput = prompt('Введите текст:');",
            "const lowercasedUserInput = userInput.toLowerCase();",
            "// lowercasedUserInput содержит введенный текст в нижнем регистре"
        ],
        dynamicExampleResult: [
            "Строка после toLowerCase: содержит введенный пользователем текст в нижнем регистре."
        ]
    },
    {
        method: "num.toString()",
        description: [
            "Метод toString() в JavaScript используется для преобразования объекта в строковое представление. Этот метод доступен для большинства типов данных в JavaScript, включая числа, массивы, объекты и другие.Обратите внимание, что для объектов результат toString() может быть различным в зависимости от реализации этого метода для конкретного объекта.",
            "Если вы хотите явно преобразовать что-то в строку, вы также можете использовать функцию String() или пустую строку.Метод toString() обычно автоматически вызывается, когда JavaScript ожидает строковое значение, но объект передается, например, при использовании оператора + для конкатенации строк и других типов данных."
        ],
        syntax: "const stringRepresentation = число.toString();",
        basicExample: [
            "const num = 42;",
            "const stringNum = num.toString();",
            "// stringNum = '42'"
        ],
        basicExampleResult: [
            "Строковое представление числа: '42'",
            "Исходное число: 42"
        ],
        dynamicExample: [
            "const userInput = prompt('Введите число:');",
            "const userNumber = parseFloat(userInput);",
            "if (!isNaN(userNumber)) {",
            "    const stringUserNumber = userNumber.toString();",
            "    // stringUserNumber содержит введенное число в виде строки",
            "} else {",
            "    // Обработка случая, когда введенное значение не является числом",
            "}"
        ],
        dynamicExampleResult: [
            "Строковое представление введенного числа (если введено число) или обработка случая, когда введенное значение не является числом."
        ]
    },
    {
        method: "obj.hasOwnProperty(prop)",
        description: [
            "Метод hasOwnProperty() в JavaScript используется для проверки того, содержит ли объект указанный ключ (свойство). Этот метод возвращает логическое значение true, если объект содержит указанное свойство, и false, если свойства с таким именем у объекта нет. Метод hasOwnProperty() не проверяет свойства, унаследованные от прототипа объекта.",
            "Метод hasOwnProperty() полезен, когда необходимо определить, принадлежит ли свойство объекту напрямую."
        ],
        syntax: "const isPropertyExist = obj.hasOwnProperty(свойство);",
        basicExample: [
            "const person = { name: 'John', age: 25 };",
            "const hasName = person.hasOwnProperty('name');",
            "// hasName = true, так как 'name' является свойством объекта person"
        ],
        basicExampleResult: [
            "Результат проверки наличия свойства 'name' в объекте: true"
        ],
        dynamicExample: [
            "function Car(make, model) {",
            "   this.make = make;",
            "   this.model = model;",
            "}",
            "Car.prototype.year = 2022;",
            "const myCar = new Car('Toyota', 'Camry');",
            "const hasMake = myCar.hasOwnProperty('make');",
            "const hasYear = myCar.hasOwnProperty('year');",
            "// hasMake = true, так как 'make' является свойством объекта myCar",
            "// hasYear = false, так как 'year' является свойством прототипа, а не самого объекта"
        ],
        dynamicExampleResult: [
            "Результат проверки наличия свойства 'make' в объекте: true",
            "Результат проверки наличия свойства 'year' в объекте: false"
        ]
    },
    {
        method: "arr.every(callback)",
        description: [
            "Метод every() в JavaScript применяется к массивам и используется для проверки того, удовлетворяют ли все элементы массива определенное условие. Метод возвращает логическое значение true, если все элементы массива соответствуют условию, и false в противном случае.callback - функция, вызываемая для каждого элемента массива. Принимает три аргумента: element (значение текущего элемента), index (индекс текущего элемента), и array (сам массив). thisArg (опциональный) - объект, который будет использоваться как значение this при вызове функции callback. Если этот аргумент не предоставлен, будет использоваться глобальный объект.",
            "Этот метод полезен, когда необходимо убедиться, что все элементы массива удовлетворяют определенному условию перед выполнением каких-то дополнительных операций."
        ],
        syntax: "arr.every(callback(element, index, array), thisArg);",
        basicExample: [
            "const numbers = [2, 4, 6, 8, 10];",
            "const allEven = numbers.every(num => num % 2 === 0);",
            "// allEven = true, так как все числа в массиве четные"
        ],
        basicExampleResult: [
            "Результат проверки: true, так как все числа в массиве четные"
        ],
        dynamicExample: [
            "const words = ['apple', 'banana', 'cherry'];",
            "const allStartWithA = words.every(word => word.startsWith('a'));",
            "// allStartWithA = false, так как не все слова в массиве начинаются с 'a'"
        ],
        dynamicExampleResult: [
            "Результат проверки: false, так как не все слова в массиве начинаются с 'a'"
        ]
    },
    {
        method: "arr.some(callback)",
        description: [
            "Метод some() в JavaScript применяется к массивам и используется для проверки того, удовлетворяет ли хотя бы один элемент массива определенному условию. Метод возвращает логическое значение true, если хотя бы один элемент массива соответствует условию, и false в противном случае.Синтаксис метода some() аналогичен методу every().callback - функция, вызываемая для каждого элемента массива. Принимает три аргумента: element (значение текущего элемента), index (индекс текущего элемента), и array (сам массив). thisArg (опциональный) - объект, который будет использоваться как значение this при вызове функции callback. Если этот аргумент не предоставлен, будет использоваться глобальный объект.",
            "Метод some() возвращает true, если хотя бы один элемент массива соответствует условию, и false в противном случае."
        ],
        syntax: "arr.some(callback(element, index, array), thisArg);",
        basicExample: [
            "const numbers = [1, 3, 5, 7, 8];",
            "const hasEven = numbers.some(num => num % 2 === 0);",
            "// hasEven = true, так как есть хотя бы одно четное число в массиве"
        ],
        basicExampleResult: [
            "Результат проверки: true, так как есть хотя бы одно четное число в массиве"
        ],
        dynamicExample: [
            "const words = ['apple', 'banana', 'cherry'];",
            "const hasCherry = words.some(word => word === 'cherry');",
            "// hasCherry = true, так как есть хотя бы одно слово 'cherry' в массиве"
        ],
        dynamicExampleResult: [
            "Результат проверки: true, так как есть хотя бы одно слово 'cherry' в массиве"
        ]
    },
    {
        method: "arr.filter(callback)",
        description: [
            "Метод filter() в JavaScript применяется к массивам и используется для создания нового массива, в который включаются только те элементы, которые удовлетворяют определенному условию. Этот метод не изменяет оригинальный массив, а возвращает новый массив, содержащий подмножество элементов, прошедших фильтрацию.callback - функция, вызываемая для каждого элемента массива. Принимает три аргумента: element (значение текущего элемента), index (индекс текущего элемента), и array (сам массив). thisArg (опциональный) - объект, который будет использоваться как значение this при вызове функции callback. Если этот аргумент не предоставлен, будет использоваться глобальный объект.",
            "filter() является полезным методом при необходимости выбрать подмножество элементов из массива в соответствии с заданным условием."
        ],
        syntax: "var newArray = arr.filter(callback(element, index, array), thisArg);",
        basicExample: [
            "const numbers = [1, 2, 3, 4, 5];",
            "const evenNumbers = numbers.filter(num => num % 2 === 0);",
            "// evenNumbers = [2, 4], так как это четные числа в массиве"
        ],
        basicExampleResult: [
            "Новый массив после filter: [2, 4]",
            "Исходный массив: [1, 2, 3, 4, 5]"
        ],
        dynamicExample: [
            "const words = ['apple', 'banana', 'cherry', 'date'];",
            "const filteredWords = words.filter(word => word.length > 5);",
            "// filteredWords = ['banana', 'cherry'], так как это слова с длиной более 5 символов"
        ],
        dynamicExampleResult: [
            "Новый массив после filter: ['banana', 'cherry']",
            "Исходный массив: ['apple', 'banana', 'cherry', 'date']"
        ]
    },
    {
        method: "arr.map(callback)",
        description: [
            "Метод map() в JavaScript применяется к массивам и используется для создания нового массива, в котором каждый элемент получен путем применения определенной функции ко всем элементам исходного массива. Этот метод не изменяет оригинальный массив, а возвращает новый массив, содержащий результаты применения функции к каждому элементу. callback - функция, вызываемая для каждого элемента массива. Принимает три аргумента: element (значение текущего элемента), index (индекс текущего элемента), и array (сам массив). thisArg (опциональный) - объект, который будет использоваться как значение this при вызове функции callback. Если этот аргумент не предоставлен, будет использоваться глобальный объект.",
            "map() является мощным методом для преобразования массивов и применения определенной логики к каждому элементу массива, чтобы создать новый массив."
        ],
        syntax: "var newArray = arr.map(callback(element, index, array), thisArg);",
        basicExample: [
            "const numbers = [1, 2, 3, 4, 5];",
            "const squaredNumbers = numbers.map(num => num ** 2);",
            "// squaredNumbers = [1, 4, 9, 16, 25], так как это квадраты чисел в массиве"
        ],
        basicExampleResult: [
            "Новый массив после map: [1, 4, 9, 16, 25]",
            "Исходный массив: [1, 2, 3, 4, 5]"
        ],
        dynamicExample: [
            "const words = ['apple', 'banana', 'cherry'];",
            "const uppercaseWords = words.map(word => word.toUpperCase());",
            "// uppercaseWords = ['APPLE', 'BANANA', 'CHERRY'], так как это слова в верхнем регистре"
        ],
        dynamicExampleResult: [
            "Новый массив после map: ['APPLE', 'BANANA', 'CHERRY']",
            "Исходный массив: ['apple', 'banana', 'cherry']"
        ]
    },
    {
        method: "arr.reduce(callback, initialValue)",
        description: [
            `Метод reduce() в JavaScript применяется к массивам и используется для свертки (аккумуляции) элементов массива в единое значение. Этот метод применяет функцию обратного вызова к каждому элементу массива слева направо (или справа налево) с целью уменьшения массива до единственного значения. Метод reduce() возвращает это конечное значение.callback - функция, вызываемая для каждого элемента массива. Принимает четыре аргумента: accumulator - аккумулированное значение (результат предыдущих вызовов callback или значение initialValue, если оно было предоставлено), currentValue - текущий элемент массива , index - индекс текущего элемента , array - сам массив. InitialValue (опциональный) - начальное значение аккумулятора. Если этот аргумент не предоставлен, то первый элемент массива используется в качестве начального значения.`,
            "Метод reduce() полезен, когда необходимо выполнить аккумуляцию значений массива для создания единственного результата."
        ],
        syntax: "var result = arr.reduce(callback(accumulator, currentValue, index, array), initialValue);",
        basicExample: [
            "const numbers = [1, 2, 3, 4, 5];",
            "const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);",
            "// sum = 15, так как это сумма всех чисел в массиве"
        ],
        basicExampleResult: [
            "Результат reduce: 15",
            "Исходный массив: [1, 2, 3, 4, 5]"
        ],
        dynamicExample: [
            "const words = ['apple', 'banana', 'cherry'];",
            "const concatenatedString = words.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue, '');",
            "// concatenatedString = 'apple banana cherry', так как это конкатенация всех слов в массиве"
        ],
        dynamicExampleResult: [
            "Результат reduce: 'apple banana cherry'",
            "Исходный массив: ['apple', 'banana', 'cherry']"
        ]
    },
    {
        method: "dateObject.toISOString()",
        description: [
            "toISOString() - это метод объекта Date в JavaScript, который возвращает строку в формате времени в стандарте ISO 8601. Этот метод полезен, когда вам нужно преобразовать объект Date в строку, соответствующую международному стандарту времени.Строка, возвращаемая методом toISOString(), представляет собой дату и время в формате `YYYY-MM-DDTHH:mm:ss.sssZ`",
            "Обратите внимание, что метод toISOString() возвращает строку в UTC времени (с `Z` в конце), не зависящую от текущего часового пояса. Этот метод часто используется при работе с серверами, базами данных и при обмене данными в формате JSON, где требуется единообразный формат представления даты и времени."
        ],
        syntax: "const isoString = dateObject.toISOString();",
        basicExample: [
            "const currentDate = new Date();",
            "const isoDateString = currentDate.toISOString();",
            "// isoDateString содержит строку в формате ISO для текущей даты и времени"
        ],
        basicExampleResult: [
            "Строка в формате ISO для текущей даты и времени"
        ],
        dynamicExample: [
            "const futureDate = new Date('2023-12-31T23:59:59');",
            "const isoFutureDateString = futureDate.toISOString();",
            "// isoFutureDateString содержит строку в формате ISO для указанной будущей даты"
        ],
        dynamicExampleResult: [
            "Строка в формате ISO для указанной будущей даты"
        ]
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


