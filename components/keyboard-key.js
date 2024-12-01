import {LetterState} from "../wordle/game.js";

export default {
    name: "KeyboardKey",
    props: ['c', 'wordle'],
    setup(props) {
        const {computed} = Vue;

        const wordle = props.wordle
        const c = props.c

        function press() {
            if (c === 'Del') {
                wordle.deleteLastLetter()
            } else if (c === 'Enter') {
                wordle.finalizeGuess()
            } else {
                wordle.addLetter(c)
            }
        }

        const keyClass = computed(() => {
            if (c === 'Del' || c === 'Enter') {
                return ''
            }

            switch(wordle.determineStateOfLetterInAlphabet(c)) {
                case LetterState.CORRECT:
                    return 'keyboard-key-correct'
                case LetterState.ALMOST_CORRECT:
                    return 'keyboard-key-almost-correct'
                case LetterState.INCORRECT:
                    return 'keyboard-key-incorrect'
                default:
                    return ''
            }
        })

        return {c, wordle, press, keyClass}
    },
    template: `
        <button class="keyboard-key" :class="keyClass" @click="press">{{ c }}</button>
    `,
};
