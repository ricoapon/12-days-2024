import compliments from "./pages/compliments.js";
import home from "./pages/home.js";
import wordle from "./pages/wordle.js";
import {page} from './state.js';
import {DAY, IS_IN_PROGRESS} from "./components/day.js";

export default {
    name: 'App',
    components: {home, compliments, wordle},
    setup() {
        const day = DAY
        const isInProgress = IS_IN_PROGRESS
        return {page, day, isInProgress}
    },
    template: `
        <div class="pt-2 text-center">
            <h2 v-if="isInProgress">Day {{ day }} of 12 days of Christmas</h2>
            <h2 v-else>12 days of Christmas</h2>
        </div>
        <hr/>
        <div class="container">
            <component :is="page"></component>
        </div>
    `,
};
