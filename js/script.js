'use strict';

// Task #1
// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
// getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

function getFactorial(num) {
    if(num === 1) {
        return num * 1
    }
    return num * getFactorial(num -1);
}
console.log(getFactorial(5));


// Task #2
// Реализовать рекурсивную функцию которая находит возводит число в степень.
// Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию
// pow(num, degree)

function pow(num, degree) {
    if(degree === 0) {
        return 1
    }
    if(degree === 1) {
        return num * 1
    }
    if(degree === -1) {
        return num * 0.1
    }
    if(degree < 0) {
        return num * 0.1 * pow(num, degree +1);
    }
    return num * pow(num, degree -1);
}
console.log(pow(3, -1));


// Task #3
// Рекурсивное суммирование
// Задача: напишите рекурсивную функцию для вычисления суммы заданных положительных целых чисел a и b без прямого использования оператора +.
// Необходимо инкрементировать одно число на единицу до тех пор, пока другое число не окажется равным нулю.

function sum(a, b) {
    if(a === 0) {
        return b;
    }
    if(b === 0) {
        return a;
    }
    if (a >= b) {
        return sum(a + 1, b - 1);
    }
    if (a < b) {
        return sum(a - 1, b + 1);
    }
}
console.log(sum(5, 5))



