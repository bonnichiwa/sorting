function quickSort(numbers, order) {

    if (numbers.length <= 1) {
        return numbers;

    } else {
        var leftArray = [];
        var rightArray = [];
        var newNumbers = [];
        var pivot = numbers.pop();
        var numbersLength = numbers.length;

        for (var a = 0; a < numbersLength; a++) {
            if (order === 'ascending') {
                if (numbers[a] <= pivot) {
                    leftArray.push(numbers[a]);
                } else {
                    rightArray.push(numbers[a]);
                }
            } else if (order === 'descending') {
                if (numbers[a] >= pivot) {
                    leftArray.push(numbers[a]);
                } else {
                    rightArray.push(numbers[a]);
                }
            }
        }
        return newNumbers.concat(quickSort(leftArray, order), pivot, quickSort(rightArray, order));
    }
}
