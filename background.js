// Listen for the extension icon click event
chrome.action.onClicked.addListener((tab) => {
    // Open the extension popup when the icon is clicked
    chrome.action.openPopup();
});
