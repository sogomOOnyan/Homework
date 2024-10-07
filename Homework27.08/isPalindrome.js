function isPalindrome(string) {
    let copyString = string.toLowerCase();
    let filteredString = '';

    for (let char of copyString) {
        if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
            filteredString += char;
        }
    }
    let reversedString = filteredString.split('').reverse().join('');

    if (filteredString === reversedString) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

isPalindrome("A man, a plan, a canal, Panama");