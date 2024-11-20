import {page} from "../state.js";
import {DAY, IS_IN_PROGRESS} from "../components/day.js";
import {Game} from "../wordle/game.js";
import letter from "../components/letter.js";

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
    components: {letter},
    setup() {
        const {ref, reactive} = Vue;
        const wordle = ref(new Game(determineWordOfTheDay()))
        const c = reactive({content: ''})
        return {page, wordle, c}
    },
    template: `
        <div class="text-center" style="max-width: 300px;">
            Hello
            <component is="letter" :l="c"></component>
            <button @click="c.content = 'q'">q</button>
            <button @click="c.content = ''">Del</button>
        </div>
    `,
};
