import { LetterState} from "../wordle/game.js";

export default {
    name: "Letter",
    props: ['l'],
    setup(props) {
        const {toRef, computed} = Vue;

        const l = toRef(props.l, "content")
        const letterClass = computed(() => {
            switch(props.l.state) {
                case LetterState.CORRECT:
                    return 'letter-correct'
                case LetterState.ALMOST_CORRECT:
                    return 'letter-almost-correct'
                case LetterState.INCORRECT:
                    return 'letter-incorrect'
                case LetterState.UNKNOWN:
                    return ''
            }
        })

        return {l, letterClass}
    },
    template: `
        <div class="text-uppercase fw-bold" style="line-height: 42px; font-size: 40px;">
        <Transition name="bounce">
            <div v-show="l != ''">{{ l }}</div>
        </Transition>
        </div>
    `,
};
