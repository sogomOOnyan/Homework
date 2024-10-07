class Shiritori {
    constructor(game_over){
        this.words = [];
        this.game_over = false;
    }
    play(word){
        if ( this.words.length  === 0 ){
            this.words.push(word)
            return this.words
        }else {
            let lastWordArr = this.words[this.words.length - 1].split('').reverse();
            let givenWordArr = word.split('')
            if(lastWordArr[0] ===  givenWordArr[0] && !this.words.includes(word)){
                this.words.push(word);
                return this.words;
            }else {
                this.game_over = true;
                return `Game Over! '${word}' is not valid`;
            }
        }
    }
    restart(){
        this.game_over = false;
        this.words = [];
        return 'Game restarted!'
    }
}

// let myShiritori = new Shiritori()

// console.log(myShiritori.play("apple")); 
// console.log(myShiritori.play("ear")); 
// console.log(myShiritori.play("rhino")); 
// console.log(myShiritori.play("orange")); 
// console.log(myShiritori.play("ear")); 
