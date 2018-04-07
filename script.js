// Task 1

const str1 = 'Hello', str2 = 'World!';

console.log(`Task 1 output: ${str1} ${str2}`);

// Task 2

const multiply = (a = 1, b = 1) => a * b;

console.log(`Task 2 output 2*3 : ${multiply(2, 3)}`);
console.log(`Task 2 output 2*  : ${multiply(2)}`);
console.log(`Task 2 output 10* : ${multiply(10)}`);

// Task 3
const avAll = [1, 3, 6, 6];
const [a, b, ...rest] = avAll;

const average = (...args) => {
    let sum = 0; args.forEach(arg => { sum += arg });
    return (sum / args.length);
};

console.log(`Task 3. The average of ${a} is: ${average(a)}`);
console.log(`Task 3. The average of ${a},${b}  is: ${average(a, b)}`);
console.log(`Task 3. The average of ${avAll} is: ${average(...avAll)}`);

//Task 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

console.log(`Task 4. The average of grades ${grades} is: ${average(...grades)}`);

//Task 5

const tab = [1, 4, 'Iwona', false, 'Nowak'];
const [aa, bb, cc, dd, ee] = tab;

console.log(`Task 5. First name and last name from table ${tab} are: ${cc} ${ee}`);
