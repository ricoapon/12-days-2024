import {page} from "../state.js";
import {DAY, IS_IN_PROGRESS} from "../components/day.js";

export default {
    name: 'Home',
    setup() {
        const day = DAY
        const isInProgress = IS_IN_PROGRESS
        return {page, day, isInProgress}
    },
    template: `
        <div class="container pt-3 text-center">
            <p> 
                 This year I will help you learn Dutch! We are going to do this in a playful way. 
                 I have recreated Wordle, a game you are probably familiar with.
                 Instead of English words, they are all Dutch words. I have selected a different word every day.
                 Can you guess all of them? 
            </p>
            <button @click="page = 'compliments'" class="btn btn-light w-100">Play</button>
        </div>
    `,
};
