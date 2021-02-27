chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "click")) {
        setTimeout(() => { console.log(document.getElementsByClassName('friend_box_title')[0].click()) }, 1000);
        sendResponse(document.getElementsByClassName('friend_box_title')[0].innerHTML);
    }
});
