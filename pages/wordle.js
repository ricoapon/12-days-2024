import {page} from "../state.js";
import {DAY, IS_IN_PROGRESS} from "../components/day.js";
import {Game} from "../wordle/game.js";
import letter from "../components/letter.js";
import keyboardKey from "../components/keyboard-key.js";

function determineWordOfTheDay() {
    if (!IS_IN_PROGRESS) {
        return 'error'
    }
    return [
        'begin',
        'schat',
        'geven',
        'afwas',
        'bezig',
        'samen',
        'kwets',
        'balen',
        'hopen',
        'hecht',
        'ruzie',
        'klaar',
    ][DAY]
}

export default {
    name: 'Wordle',
    components: {letter, keyboardKey},
    setup() {
        const {ref} = Vue;
        const wordle = ref(new Game(determineWordOfTheDay(), page))

        return {page, wordle}
    },
    template: `
        <div class="text-center" style="max-width: 300px;">
            
            <div v-for="guessedWord in wordle.guessedWords" class="d-flex">
                <div v-for="(guessedLetter, index) in guessedWord">
                    <component is="letter" :l="guessedLetter" :delay="index"></component>
                </div>
            </div>
            
            <div id="keyboard-cont">
                <div class="first-row">
                    <component is="keyboardKey" v-for="c in 'qwertyuiop'.split('')" :c :wordle></component>
                </div>
                <div class="second-row">
                    <component is="keyboardKey" v-for="c in 'asdfghjkl'.split('')" :c :wordle></component>
                </div>
                <div class="third-row">
                    <component is="keyboardKey" c="Enter" :wordle></component>
                    <component is="keyboardKey" v-for="c in 'zxcvbnm'.split('')" :c :wordle></component>
                    <component is="keyboardKey" c="Del" :wordle></component>
                </div>
            </div>
        </div>
    `,
};
