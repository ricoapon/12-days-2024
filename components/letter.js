import { LetterState} from "../wordle/game.js";

export default {
    name: "Letter",
    props: [
        'l', // The letter containing state and character that should be displayed.
        'delay', // A value from 0 to 4 indicating how long the delay should be (0 = 0ms, 4 = 1200ms).
    ],
    setup(props) {
        const {toRef, computed} = Vue;

        const delayInMs = props.delay * 300;

        const l = toRef(props, "l")
        const letterClass = computed(() => {
            switch(l.value.state) {
                case LetterState.CORRECT:
                    return 'letter-correct'
                case LetterState.ALMOST_CORRECT:
                    return 'letter-almost-correct'
                case LetterState.INCORRECT:
                    return 'letter-incorrect'
                case LetterState.UNKNOWN:
                    if (l.value.content !== '') {
                        return 'letter-no-state-yet'
                    }
                    return 'letter-no-letter-no-state'
            }
        })

        return {l, letterClass, delayInMs}
    },
    template: `
        <div class="text-uppercase fw-bold letter"
             :class="letterClass"
            style="line-height: 42px; font-size: 40px; width: 45px; height: 45px; transition: all 0.3s;"
            :style="{transitionDelay: delayInMs + 'ms'}">
        <Transition name="bounce">
            <div v-show="l.content !== ''">{{ l.content }}</div>
        </Transition>
        </div>
    `,
};
