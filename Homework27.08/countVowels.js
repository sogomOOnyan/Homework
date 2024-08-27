function countVowels (string) {
    let count = 0;
    let newString = string.toLowerCase();
    for (let i = 0; i < newString.length; i++) {
        if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
            count++;
        }
    }
    console.log(count);
    return count;
}

countVowels('aaa')