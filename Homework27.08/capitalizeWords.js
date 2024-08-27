function capitalizeWords(string) {
    let words = string.split(' ');

    let capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    });

    return capitalizedWords.join(' ');
}

console.log(capitalizeWords("hello world")); 