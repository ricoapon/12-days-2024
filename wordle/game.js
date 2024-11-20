import {WORDS} from "./words.js";

// Normal is 6, but guessing Dutch words might be a little bit harder. And I want her to succeed every day!
const MAX_NR_OF_GUESSES = 7
const WORD_LENGTH = 5

export const LetterState = Object.freeze({
    INCORRECT:   Symbol("INCORRECT"),
    CORRECT:  Symbol("CORRECT"),
    ALMOST_CORRECT: Symbol("ALMOST_CORRECT"),
    UNKNOWN: Symbol("UNKNOWN"),
});

export class Game {
    constructor(answer) {
        this.answerLetters = answer.split("")

        this.guessedWords = []
        for (let i = 0; i < MAX_NR_OF_GUESSES; i++) {
            let guessedLetters = [];
            for (let j = 0; j < WORD_LENGTH; j++) {
                guessedLetters.push({
                    content: '',
                    state: LetterState.UNKNOWN
                })
            }
            this.guessedWords.push(guessedLetters)
        }

        this.currentGuessingWord = 0
        this.currentGuessingLetter = 0

        // Using sets because we are fancy. Lists would have sufficed, but I find duplicates ugly and I don't want to
        // write code to avoid it.
        this.incorrectLetters = new Set()
        this.correctLetters = new Set()
        this.almostCorrectLetters = new Set()
    }

    addLetter(letter) {
        if (this.currentGuessingLetter >= WORD_LENGTH) {
            return
        }

        this.guessedWords[this.currentGuessingWord][this.currentGuessingLetter].content = letter
        this.currentGuessingLetter++
    }

    deleteLastLetter() {
        if (this.currentGuessingLetter <= 0) {
            return
        }

        this.currentGuessingLetter--
        this.guessedWords[this.currentGuessingWord][this.currentGuessingLetter].content = ''
    }

    finalizeGuess() {
        if (this.currentGuessingLetter < WORD_LENGTH) {
            return
        }

        let guessedWord = this.guessedWords[this.currentGuessingWord].map(l => l.content).concat()
        if (!WORDS.includes(guessedWord)) {
            alert('This word does not exist')
        }

        let guessedLetters = this.guessedWords[this.currentGuessingWord]

        for (let i = 0; i < WORD_LENGTH; i++) {
            let letter = guessedLetters[i].content
            if (letter === this.answerLetters[i]) {
                guessedLetters[i].state = LetterState.CORRECT
                this.correctLetters.add(letter)
                // This isn't strictly needed, but it is cleaner to do so.
                this.almostCorrectLetters.delete(letter)
            } else if (this.answerLetters.includes(guessedLetters[i].state)) {
                guessedLetters[i].state = LetterState.ALMOST_CORRECT
                this.almostCorrectLetters.add(letter)
            } else {
                guessedLetters[i].state = LetterState.INCORRECT
                this.incorrectLetters.add(letter)
            }
        }

        this.currentGuessingWord++
        this.currentGuessingLetter = 0

        if (this.currentGuessingWord === MAX_NR_OF_GUESSES) {
            alert('You ran out of guessed. You can always try again!')
        }
    }

    determineStateOfLetterInAlphabet(letter) {
        if (this.incorrectLetters.has(letter)) {
            return LetterState.INCORRECT
        } else if (this.correctLetters.has(letter)) {
            return LetterState.CORRECT
        } else if (this.almostCorrectLetters.has(letter)) {
            return LetterState.ALMOST_CORRECT
        }
        return LetterState.UNKNOWN
    }
}
