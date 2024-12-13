// This variable represents the day of the 12-day period. If it is 0, it hasn't started yet. If it is 13, it has finished.
// The values 1 to 12 represent the 12 possible days.
let DAY = 0;
let IS_IN_PROGRESS;

const d = new Date();
if (d.getFullYear() === 2024 && d.getMonth() === 11) {
    DAY = Math.min(14, Math.max(0, d.getDate() - 12))
}

IS_IN_PROGRESS = (DAY >= 1 && DAY <= 12)

let dayOverrideForTest = new URL(window.location.href).searchParams.get("d");
if (dayOverrideForTest != null) {
    IS_IN_PROGRESS = true
    // Input parameter is a string, so we need to convert it to an integer.
    DAY = +dayOverrideForTest
}
