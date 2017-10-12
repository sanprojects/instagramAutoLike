chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
    sendResponse(instagramAutoLike.count);
});

var instagramAutoLike = {
    timer: null,
    count: 0,
    onScroll: function (event) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(function() {
            var links = document.querySelectorAll(".coreSpriteHeartOpen");
            links.forEach(function(v,k) {
                //v.parentNode.click();
            });
            this.count += 10;
            console.log(this);
            chrome.runtime.sendMessage({count: this.count});

        }, 800);
    }
};

instagramAutoLike.onScroll();
document.addEventListener('DOMContentLoaded', instagramAutoLike.onScroll);
document.addEventListener('scroll', instagramAutoLike.onScroll);