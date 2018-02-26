function bubbleSort(numbers, order) {

    let swapped = false;

    for (let a = 0; a < numbers.length - 1; a++) {
        if (order === 'ascending') {
            if (numbers[a] > numbers[a + 1]) {
                let swap = numbers[a + 1];
                numbers[a + 1] = numbers[a];
                numbers[a] = swap;
                swapped = true;
            }
        } else if (order === 'descending') {
            if (numbers[a] < numbers[a + 1]) {
                let swap = numbers[a + 1];
                numbers[a + 1] = numbers[a];
                numbers[a] = swap;
                swapped = true;
            }
        }

    }

    if (swapped) {
        bubbleSort(numbers, order);
    }

    return numbers;
}
