var urlRegex = /^https:\/\/lichess.org\/*/;

function doStuffWithDOM(element) {
    console.log(element);
}

chrome.webNavigation.onCompleted.addListener(function(tab) {
    console.log(tab)
    if (urlRegex.test(tab.url)) {
        chrome.tabs.sendMessage(tab.tabId, { text: "click" },
                                doStuffWithDOM);
    }
});
