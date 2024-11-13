import {page} from "../state.js";

export default {
    name: 'Home',
    setup() {
        return {page}
    },
    template: `
        <div class="container pt-3 text-center">
            <h1>Home</h1>
            <button v-on:click="page = 'compliments'">Go to compliments</button>
        </div>
        <hr/>
    `,
};
