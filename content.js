chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "click")) {
        setTimeout(() => { document.getElementsByClassName("friend_box_title")[0].click() }, 1000);
    }
    else if (msg.text && (msg.text == "watch")){
        setTimeout(() => {
            buttons = document.getElementsByClassName("fbt")
            for(var i = 0; i<buttons.length; i++){
                if(buttons[i].dataset.act == "first"){
                    var clickEvent = document.createEvent("MouseEvents");
                    clickEvent.initEvent("mousedown", true, true);
                    buttons[i].dispatchEvent(clickEvent);
                }
                if(buttons[i].title == "Menu"){
                    var clickEvent = document.createEvent("MouseEvents");
                    clickEvent.initEvent("mousedown", true, true);
                    buttons[i].dispatchEvent(clickEvent);
                }
            }

            buttons = document.getElementsByClassName("button button-empty");
            for (var i = 0; i < buttons.length; i++){
                if(buttons[i].textContent == "Realtime"){
                    buttons[i].click();
                };
            }
        }, 0);
    }
    else if (msg.text && (msg.text == "checkGameEnd")){
        moves = document.getElementsByTagName("move");
        if(moves.length == 0){
            sendResponse("Error");
        }
        sendResponse(moves[moves.length-1].className);
    }
    else if (msg.text && (msg.text == "gameResult")){
        sendResponse(document.getElementsByClassName("result")[0].innerText);
    }
    else if (msg.text && (msg.text == "switchGame")){

    }
});
