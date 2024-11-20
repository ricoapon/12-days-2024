const {ref} = Vue;

// Page contains the name of the page that should be shown on screen. See components in app.js of possible pages.
// Updating this variable in any location will ensure you "move" to that page. Note that I did not implement routing,
// since I do not want other pages to be accessible via URL (to prevent skipping to the final page).
export const page = ref('wordle');
