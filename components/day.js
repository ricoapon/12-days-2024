// This variable represents the day of the 12-day period. It will have a value of 1 to 12 if the event is in progress.
export let DAY = 0;
export let IS_IN_PROGRESS;

const d = new Date();
if (d.getFullYear() === 2024 && d.getMonth() === 12) {
    DAY = Math.min(13, Math.max(0, d.getDay() - 11))
}

IS_IN_PROGRESS = (DAY >= 1 && DAY <= 12)

let dayOverrideForTest = new URL(window.location.href).searchParams.get("d");
if (dayOverrideForTest != null) {
    IS_IN_PROGRESS = true
    // Input parameter is a string, so we need to convert it to an integer.
    DAY = +dayOverrideForTest
}
