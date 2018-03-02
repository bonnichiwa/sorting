function firstRecurringChar(string) {
    let counts = {};

    for (let a = 0; a <= string.length; a++) {
        if (string[a] in counts) {
            return string[a];
        } else {
            counts[string[a]] = 1;
        }
    }
    return null;
}
