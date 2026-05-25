// Завдання 1 – статистика масиву чисел
function summarizeNumbers(numbers) {

    let count = numbers.length;
    let sum = 0;
    let evenCount = 0;
    let max = undefined;
    let category = "";

    // Перевірка на порожній масив
    if (count === 0) {
        category = "empty";

        return {
            count: 0,
            sum: 0,
            evenCount: 0,
            max: undefined,
            category: category
        };
    }

    // Обчислення через цикл
    for (let i = 0; i < numbers.length; i++) {

        sum += numbers[i];

        // Підрахунок парних чисел
        if (numbers[i] % 2 === 0) {
            evenCount++;
        }

        // Пошук найбільшого числа
        if (max === undefined || numbers[i] > max) {
            max = numbers[i];
        }
    }

    // Визначення категорії
    if (sum > 0) {
        category = "positive";
    } else {
        category = "non-positive";
    }

    // Повернення результату
    return {
        count: count,
        sum: sum,
        evenCount: evenCount,
        max: max,
        category: category
    };
}

// Перевірка роботи
console.log(summarizeNumbers([4, 7, 2, 9]));
console.log(summarizeNumbers([]));