/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {
            command: "change_title",
            title: "hoge"
        },
        function(msg) {
            console.log("result message:", msg);
        });
});



var instagramAutoLike = {
    timer: null,
    onScroll: function (event) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(function() {
            console.log(event);
        }, 800);
    }
};

document.addEventListener('DOMContentLoaded', instagramAutoLike.onScroll);
document.addEventListener('scroll', instagramAutoLike.onScroll);