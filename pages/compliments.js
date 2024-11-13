import {page} from "../state.js";
import firstComponent from "../components/first-component.js";

export default {
    name: 'Compliments',
    components: {firstComponent},
    setup() {
        return {page}
    },
    template: `
        <div class="container pt-3 text-center">
            <h1>Compliments</h1>
        </div>
        <firstComponent></firstComponent>
        <hr/>
    `,
};