// noinspection HtmlUnknownAttribute

import {page} from "../state.js";
import firstComponent from "../components/first-component.js";
import {DAY, IS_IN_PROGRESS} from "../components/day.js";

export default {
    name: 'Compliments',
    components: {firstComponent},
    setup() {
        const {ref} = Vue;

        const day = DAY
        const isInProgress = IS_IN_PROGRESS
        const showFinalMessage = ref(false)
        return {page, day, isInProgress, showFinalMessage}
    },
    template: `
    <div class="text-center">
        <p v-if="day == 1">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 2">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 3">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 4">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 5">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 6">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 7">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 8">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 9">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 10">
            You are the most loving girlfriend I have ever had.
        </p>
        <p v-else-if="day == 11">
            You are the most loving girlfriend I have ever had.
        </p>
        <div v-else-if="day == 12">
            <div v-if="!showFinalMessage">
                <p>
                    You are the most loving girlfriend I could wish for. I am ready now. I want to buy a house together and live
                    with you. Do you still want to?
                </p>
                <a @click="showFinalMessage = true" class="btn btn-success w-100 mb-1">Yes</a>
                <a @click="showFinalMessage = true" class="btn btn-success w-100">Yes</a>
            </div>
            <p v-if="showFinalMessage">
                Tell me the answer by kissing the real me!
            </p>
        </div>
    </div>
    `,
};
