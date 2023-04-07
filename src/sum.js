export const sum = (first, second) => {
    return first + second;
}

export const sumAll = (...numbers) => {
    let total = 0;
    numbers.map(data => total += data);
    return total;
}

export const calculate = (numbers, callback) => {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }

    callback(total);
}

export const calculateAndReturn = (numbers, callback) => {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }

    return callback(total);
}
