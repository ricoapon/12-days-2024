import compliments from "./pages/compliments.js";
import home from "./pages/home.js";
import {page} from './state.js';

export default {
    name: 'App',
    components: {home, compliments},
    setup() {
        return {page}
    },
    template: `
        <div id="content">
            <component :is="page"></component>
        </div>
    `,
};
