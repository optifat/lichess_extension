var urlRegex = /^https:\/\/lichess.org\/*/;
var firstPlayerPoints = 0;
var secondPlayerPoints = 0;
var currentTab;
var flag = true;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function addPoints(element){
    points = element.split("-")
    if(isNaN(Number(points[0]))){
        firstPlayerPoints += 0.5;
        secondPlayerPoints += 0.5;
    }
    else{
        firstPlayerPoints += Number(points[0]);
        secondPlayerPoints += Number(points[1]); 
    }
    console.log(firstPlayerPoints, secondPlayerPoints);
}

function gameResultRequest(element) {
    console.log(element);
    if(element == "active"){
        flag = false;
        chrome.tabs.sendMessage(currentTab.tabId, { text: "gameResult" }, addPoints);
        chrome.tabs.sendMessage(currentTab.tabId, { text: "switchGame" });
    }
}

chrome.webNavigation.onCompleted.addListener(function(tab) {
    currentTab = tab;
    if (urlRegex.test(tab.url)) {
        chrome.tabs.sendMessage(currentTab.tabId, { text: "click" });
    }
    if(false){
        chrome.tabs.sendMessage(currentTab.tabId, { text: "watch" });

        gameEndChecker = async function(){
            while(flag){
                chrome.tabs.sendMessage(currentTab.tabId, { text: "checkGameEnd" }, gameResultRequest)
                await sleep(1000);
            }
        }
        gameEndChecker();
    }
        
});
