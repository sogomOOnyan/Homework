function reverseString(string){
    let newString = string.split('').reverse().join('');
    console.log(newString);
    return newString;
}

reverseString("abcd")