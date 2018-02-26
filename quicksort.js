function quickSort(numbers) {

    if (numbers.length <= 1) {
        return numbers;

    } else {
        var leftArray = [];
        var rightArray = [];
        var newNumbers = [];
        var pivot = numbers.pop();
        var numbersLength = numbers.length;

        for (var a = 0; a < numbersLength; a++) {
            if (numbers[a] <= pivot) {
                leftArray.push(numbers[a]);
            } else {
                rightArray.push(numbers[a]);
            }
        }
        return newNumbers.concat(quickSort(leftArray), pivot, quickSort(rightArray));
    }
}

console.log(quickSort([5,3,2,0,1,4]));