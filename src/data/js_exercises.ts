export const js_exercises = [
  {
    id: 1,
    question:
      '// fix the errors. Answer desired: 3\nfunction adNumbers(num1, num2) {\n  return num1 + num2;\n}\n\nconsole.log(addnumbers(1, num2))',
    answer: '3',
  },
  {
    id: 2,
    question:
      '// fix the errors. Answer desired: 5\nfunction multiplyNumbers(a, b) {\n  return a * b;\n}\n\nconsole.log(multiplyNumbers(2, 3))',
    answer: '5',
  },
  {
    id: 3,
    question:
      '// fix the errors. Answer desired: Hello World!\nfunction greet() {\n  return "Hello " . "World!";\n}\n\nconsole.log(greets)',
    answer: 'Hello World!',
  },
  {
    id: 4,
    question:
      '// fix the errors. Answer desired: 4\nfunction square(number) {\n  return number * number;\n}\n\nconsole.log(square(2))',
    answer: '4',
  },
  {
    id: 5,
    question:
      '// fix the errors. Answer desired: 10\nfunction sumArray(arr) {\n  return arr.reduce((acc, num) => acc + num, 0);\n}\n\nconsole.log(sumArray([1, 2, 3, 4]))',
    answer: '10',
  },
  {
    id: 6,
    question:
      '// fix the errors. Answer desired: true\nfunction isEven(num) {\n  return num % 2 === 0;\n}\n\nconsole.log(isEven(4))',
    answer: 'true',
  },
  {
    id: 7,
    question:
      '// fix the errors. Answer desired: 15\nfunction add(a, b, c) {\n  return a + b + c;\n}\n\nconsole.log(add(5, 5, 5))',
    answer: '15',
  },
  {
    id: 8,
    question:
      '// fix the errors. Answer desired: 8\nfunction subtract(a, b) {\n  return a - b;\n}\n\nconsole.log(subtract(10, 2))',
    answer: '8',
  },
  {
    id: 9,
    question:
      '// fix the errors. Answer desired: 1\nfunction findMax(a, b) {\n  return a > b ? a : b;\n}\n\nconsole.log(findMax(1, 0))',
    answer: '1',
  },
  {
    id: 10,
    question:
      '// fix the errors. Answer desired: 25\nfunction calculateArea(radius) {\n  return Math.PI * radius * radius;\n}\n\nconsole.log(calculateArea(5))',
    answer: '78.53981633974483',
  },
  {
    id: 11,
    question:
      '// fix the errors. Answer desired: [1, 2, 3]\nfunction filterOddNumbers(arr) {\n  return arr.filter(num => num % 2 !== 0);\n}\n\nconsole.log(filterOddNumbers([1, 2, 3, 4]))',
    answer: '[1, 3]',
  },
  {
    id: 12,
    question:
      '// fix the errors. Answer desired: 12\nfunction factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(4))',
    answer: '24',
  },
  {
    id: 13,
    question:
      '// fix the errors. Answer desired: 5\nconst arr = [1, 2, 3, 4, 5];\nconst [a, b, , , c] = arr;\nconsole.log(a + c)',
    answer: '6',
  },
  {
    id: 14,
    question:
      '// fix the errors. Answer desired: 25\nfunction getPerson(name, age) {\n  return { name, age };\n}\n\nconst person = getPerson("Alice", 25);\nconsole.log(person.age)',
    answer: '25',
  },
  {
    id: 15,
    question:
      '// fix the errors. Answer desired: 30\nfunction sumOfSquares(arr) {\n  return arr.map(num => num * num).reduce((acc, curr) => acc + curr, 0);\n}\n\nconsole.log(sumOfSquares([1, 2, 3, 4]))',
    answer: '30',
  },
  {
    id: 16,
    question:
      '// fix the errors. Answer desired: false\nconst isPalindrome = str => {\n  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();\n  return cleaned === cleaned.split("").reverse().join("");\n};\n\nconsole.log(isPalindrome("hello"))',
    answer: 'false',
  },
  {
    id: 17,
    question:
      '// fix the errors. Answer desired: 5\nconst array = [1, 2, 3, 4, 5];\nconst result = array.find(num => num > 3);\nconsole.log(result)',
    answer: '4',
  },
  {
    id: 18,
    question:
      '// fix the errors. Answer desired: 3\nfunction countOccurrences(arr, value) {\n  return arr.filter(item => item === value).length;\n}\n\nconsole.log(countOccurrences([1, 2, 2, 3, 3, 3], 3))',
    answer: '3',
  },
  {
    id: 19,
    question:
      '// fix the errors. Answer desired: 14\nconst numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\nconsole.log(sum + numbers.length)',
    answer: '20',
  },
  {
    id: 20,
    question:
      '// fix the errors. Answer desired: "string"\nfunction changeType(value) {\n  return String(value);\n}\n\nconsole.log(changeType(123))',
    answer: '"123"',
  },
  {
    id: 21,
    question:
      '// fix the errors. Answer desired: 6\nconst obj = {a: 1, b: 2, c: 3};\nconst values = Object.values(obj);\nconst sum = values.reduce((acc, val) => acc + val, 0);\nconsole.log(sum)',
    answer: '6',
  },
  {
    id: 22,
    question:
      '// fix the errors. Answer desired: [2, 4, 6]\nfunction getEvenNumbers(arr) {\n  return arr.filter(num => num % 2 === 0);\n}\n\nconsole.log(getEvenNumbers([1, 2, 3, 4, 5, 6]))',
    answer: '[2, 4, 6]',
  },
  {
    id: 23,
    question:
      '// fix the errors. Answer desired: 1\nconst countDown = (n) => {\n  if (n <= 0) return [];\n  return [n, ...countDown(n - 1)];\n};\n\nconsole.log(countDown(1))',
    answer: '[1]',
  },
  {
    id: 24,
    question:
      '// fix the errors. Answer desired: true\nconst isPrime = num => {\n  if (num <= 1) return false;\n  for (let i = 2; i <= Math.sqrt(num); i++) {\n    if (num % i === 0) return false;\n  }\n  return true;\n};\n\nconsole.log(isPrime(7))',
    answer: 'true',
  },
  {
    id: 25,
    question:
      '// fix the errors. Answer desired: [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]\nfunction mergeArrays(arr1, arr2) {\n  return arr1.map((item, index) => ({ ...item, ...arr2[index] }));\n}\n\nconst names = [{ name: "Alice" }, { name: "Bob" }];\nconst ages = [{ age: 25 }, { age: 30 }];\nconsole.log(mergeArrays(names, ages))',
    answer: '[{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]',
  },
  {
    id: 26,
    question:
      '// fix the errors. Answer desired: 6\nconst multiply = (...args) => args.reduce((acc, num) => acc * num, 1);\n\nconsole.log(multiply(1, 2, 3))',
    answer: '6',
  },
  {
    id: 27,
    question:
      '// fix the errors. Answer desired: [1, 2, 3]\nconst flattenArray = arr => arr.flat();\n\nconsole.log(flattenArray([[1], [2], [3]]))',
    answer: '[1, 2, 3]',
  },
  {
    id: 28,
    question:
      '// fix the errors. Answer desired: "John Doe"\nfunction formatFullName({ firstName, lastName }) {\n  return `${firstName} ${lastName}`;\n}\n\nconst person = { firstName: "John", lastName: "Doe" };\nconsole.log(formatFullName(person))',
    answer: 'John Doe',
  },
  {
    id: 29,
    question:
      '// fix the errors. Answer desired: 10\nconst array = [1, 2, 3, 4];\nconst result = array.map(num => num + 1).reduce((acc, num) => acc + num, 0);\nconsole.log(result)',
    answer: '10',
  },
  {
    id: 30,
    question:
      '// fix the errors. Answer desired: "hello world"\nconst transformString = str => str.trim().toLowerCase();\n\nconsole.log(transformString("  Hello World  "))',
    answer: '"hello world"',
  },
  {
    id: 31,
    question:
      '// fix the errors. Answer desired: "hello world"\nfunction reverseString(str) {\n  return str.split("").reverse().join("");\n}\n\nconsole.log(reverseString("dlrow olleh"))',
    answer: '"hello world"',
  },
  {
    id: 32,
    question:
      '// fix the errors. Answer desired: [{ id: 1, value: "foo" }, { id: 2, value: "bar" }]\nconst items = [{ id: 1 }, { id: 2 }];\nconst values = ["foo", "bar"];\nconst result = items.map((item, index) => ({ ...item, value: values[index] }));\n\nconsole.log(result)',
    answer: '[{ id: 1, value: "foo" }, { id: 2, value: "bar" }]',
  },
  {
    id: 33,
    question:
      '// fix the errors. Answer desired: { "name": "Alice", "age": 25, "city": "New York" }\nconst person = { name: "Alice", age: 25 };\nconst city = "New York";\n\nconst updatedPerson = { ...person, city };\nconsole.log(updatedPerson)',
    answer: '{"name": "Alice", "age": 25, "city": "New York"}',
  },
  {
    id: 34,
    question:
      '// fix the errors. Answer desired: [2, 4, 6]\nconst numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(num => num % 2 === 0);\nconst doubled = evens.map(num => num * 2);\nconsole.log(doubled)',
    answer: '[4, 8, 12]',
  },
  {
    id: 35,
    question:
      '// fix the errors. Answer desired: 1\nconst findMax = (...args) => Math.max(...args);\n\nconsole.log(findMax(1, 2, 3, 0, -1))',
    answer: '3',
  },
  {
    id: 36,
    question:
      '// fix the errors. Answer desired: "HELLO"\nconst toUpperCase = str => str.split("").reduce((acc, char) => acc + char.toUpperCase(), "");\n\nconsole.log(toUpperCase("hello"))',
    answer: '"HELLO"',
  },
  {
    id: 37,
    question:
      '// fix the errors. Answer desired: { "name": "Alice", "age": 25 }\nfunction createPerson(name, age) {\n  return { name, age };\n}\n\nconst person = createPerson("Alice", 25);\nconsole.log(person)',
    answer: '{"name": "Alice", "age": 25}',
  },
  {
    id: 38,
    question:
      '// fix the errors. Answer desired: "3: 1, 2, 3"\nconst formatArray = (arr) => `${arr.length}: ${arr.join(", ")}`;\n\nconsole.log(formatArray([1, 2, 3]))',
    answer: '"3: 1, 2, 3"',
  },
  {
    id: 39,
    question:
      '// fix the errors. Answer desired: "Hello John Doe"\nfunction greet({ firstName, lastName }) {\n  return `Hello ${firstName} ${lastName}`;\n}\n\nconst person = { firstName: "John", lastName: "Doe" };\nconsole.log(greet(person))',
    answer: '"Hello John Doe"',
  },
  {
    id: 40,
    question:
      '// fix the errors. Answer desired: { a: 1, b: 3 }\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { b: 3, c: 4 };\n\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged)',
    answer: '{"a": 1, "b": 3}',
  },
  {
    id: 41,
    question:
      '// fix the errors. Answer desired: "1 2 3"\nconst concatenate = (arr) => arr.reduce((acc, val) => `${acc} ${val}`, "").trim();\n\nconsole.log(concatenate([1, 2, 3]))',
    answer: '"1 2 3"',
  },
  {
    id: 42,
    question:
      '// fix the errors. Answer desired: [2, 4, 6]\nconst numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(num => num % 2 === 0);\nconst doubled = evens.map(num => num * 2);\nconsole.log(doubled)',
    answer: '[4, 8, 12]',
  },
  {
    id: 43,
    question:
      '// fix the errors. Answer desired: {a: 1, b: 2}\nconst obj = { a: 1 };\nObject.assign(obj, { b: 2 });\n\nconsole.log(obj)',
    answer: '{"a": 1, "b": 2}',
  },
  {
    id: 44,
    question:
      '// fix the errors. Answer desired: "2, 4, 6"\nconst numbers = [1, 2, 3, 4, 5, 6];\nconst filtered = numbers.filter(num => num % 2 === 0);\nconst result = filtered.join(", ");\nconsole.log(result)',
    answer: '"2, 4, 6"',
  },
  {
    id: 45,
    question:
      '// fix the errors. Answer desired: 7\nconst calculate = (a, b, operator) => {\n  switch (operator) {\n    case "+": return a + b;\n    case "-": return a - b;\n    case "*": return a * b;\n    case "/": return a / b;\n    default: throw new Error("Invalid operator");\n  }\n};\n\nconsole.log(calculate(10, 3, "-"))',
    answer: '7',
  },
  {
    id: 46,
    question:
      '// fix the errors. Answer desired: "name: John Doe"\nconst createGreeting = ({ firstName, lastName }) => `name: ${firstName} ${lastName}`;\n\nconst person = { firstName: "John", lastName: "Doe" };\nconsole.log(createGreeting(person))',
    answer: '"name: John Doe"',
  },
  {
    id: 47,
    question:
      '// fix the errors. Answer desired: [2, 4, 6]\nconst arr = [1, 2, 3, 4, 5, 6];\nconst even = arr.filter(num => num % 2 === 0);\nconst doubled = even.map(num => num * 2);\nconsole.log(doubled)',
    answer: '[4, 8, 12]',
  },
  {
    id: 48,
    question:
      '// fix the errors. Answer desired: {1: "a", 2: "b", 3: "c"}\nconst keys = [1, 2, 3];\nconst values = ["a", "b", "c"];\nconst result = keys.reduce((acc, key, index) => {\n  acc[key] = values[index];\n  return acc;\n}, {});\n\nconsole.log(result)',
    answer: '{"1": "a", "2": "b", "3": "c"}',
  },
  {
    id: 49,
    question:
      '// fix the errors. Answer desired: 12\nconst addNumbers = (a, b, c) => a + b + c;\n\nconst numbers = [4, 5, 3];\nconsole.log(addNumbers(...numbers))',
    answer: '12',
  },
  {
    id: 50,
    question:
      '// fix the errors. Answer desired: "true false"\nconst compare = (a, b) => {\n  const isEqual = a === b;\n  const isNotEqual = a !== b;\n  return `${isEqual} ${isNotEqual}`;\n};\n\nconsole.log(compare(1, 2))',
    answer: 'false true',
  },
  {
    id: 51,
    question:
      '// fix the errors. Answer desired: "a: 1, b: 2"\nconst obj = { a: 1, b: 2 };\nconst entries = Object.entries(obj);\nconst result = entries.map(([key, value]) => `${key}: ${value}`).join(", ");\n\nconsole.log(result)',
    answer: '"a: 1, b: 2"',
  },
  {
    id: 52,
    question:
      '// fix the errors. Answer desired: "1-1-2-2-3-3-4-4"\nconst mergeArrays = (arr1, arr2) => {\n  const merged = [...arr1, ...arr2];\n  return merged.join("-");\n};\n\nconsole.log(mergeArrays([1, 2, 3], [1, 2, 3, 4]))',
    answer: '"1-2-3-4"',
  },
  {
    id: 53,
    question:
      '// fix the errors. Answer desired: "John Doe is 30 years old"\nconst introduce = ({ firstName, lastName, age }) => {\n  return `${firstName} ${lastName} is ${age} years old`;\n};\n\nconst person = { firstName: "John", lastName: "Doe", age: 30 };\nconsole.log(introduce(person))',
    answer: '"John Doe is 30 years old"',
  },
  {
    id: 54,
    question:
      '// fix the errors. Answer desired: 7\nconst numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\nconst result = sum / numbers.length;\n\nconsole.log(result)',
    answer: '3',
  },
  {
    id: 55,
    question:
      '// fix the errors. Answer desired: "hello world"\nconst concatenate = (arr) => {\n  return arr.reduce((acc, val) => acc + " " + val);\n};\n\nconsole.log(concatenate(["hello", "world"]))',
    answer: '"hello world"',
  },
  {
    id: 56,
    question:
      '// fix the errors. Answer desired: { "name": "Alice", "age": 25, "city": "New York" }\nconst person = { name: "Alice", age: 25 };\nconst addCity = (obj, city) => ({ ...obj, city });\n\nconsole.log(addCity(person, "New York"))',
    answer: '{"name": "Alice", "age": 25, "city": "New York"}',
  },
  {
    id: 57,
    question:
      '// fix the errors. Answer desired: [1, 4, 9]\nconst squares = [1, 2, 3].map(x => x ** 2);\nconsole.log(squares)',
    answer: '[1, 4, 9]',
  },
  {
    id: 58,
    question:
      '// fix the errors. Answer desired: [4, 4, 4]\nconst nums = [1, 2, 3];\nconst result = nums.flatMap(num => [num * 2, num * 2]);\nconsole.log(result)',
    answer: '[2, 2, 4, 4, 6, 6]',
  },
  {
    id: 59,
    question:
      '// fix the errors. Answer desired: "First, Second"\nconst formatItems = (...items) => items.join(", ");\nconsole.log(formatItems("First", "Second"))',
    answer: '"First, Second"',
  },
  {
    id: 60,
    question:
      '// fix the errors. Answer desired: "0001"\nconst padNumber = (num) => num.toString().padStart(4, "0");\n\nconsole.log(padNumber(1))',
    answer: '"0001"',
  },
  {
    id: 61,
    question:
      '// fix the errors. Answer desired: 5\nconst calculate = (a, b, operation) => {\n  const operations = {\n    add: (x, y) => x + y,\n    subtract: (x, y) => x - y,\n    multiply: (x, y) => x * y,\n    divide: (x, y) => x / y\n  };\n  return operations[operation](a, b);\n};\n\nconsole.log(calculate(10, 5, "divide"))',
    answer: '2',
  },
  {
    id: 62,
    question:
      '// fix the errors. Answer desired: { "a": 1, "b": 2 }\nconst mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });\n\nconst obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconsole.log(mergeObjects(obj1, obj2))',
    answer: '{"a": 1, "b": 2}',
  },
  {
    id: 63,
    question:
      '// fix the errors. Answer desired: 1\nconst array = [1, [2, [3, [4]]]];\nconst getValue = (arr, index) => arr.flat(depth = 3)[index];\nconsole.log(getValue(array, 3))',
    answer: '4',
  },
  {
    id: 64,
    question:
      '// fix the errors. Answer desired: [2, 4, 6]\nconst range = (start, end) => {\n  const arr = [];\n  for (let i = start; i <= end; i++) {\n    if (i % 2 === 0) arr.push(i);\n  }\n  return arr;\n};\n\nconsole.log(range(1, 6))',
    answer: '[2, 4, 6]',
  },
  {
    id: 65,
    question:
      '// fix the errors. Answer desired: true\nconst isObject = (val) => val !== null && typeof val === "object";\n\nconsole.log(isObject({}))',
    answer: 'true',
  },
]
