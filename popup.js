// Copyright (c) 2017 Nakhapetyan Sergey.

document.addEventListener('DOMContentLoaded', function(){


});

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
    console.log(msg);
    //sendResponse({test: 123});
    if (msg && msg.count) window.container.innerHTML = msg.count;
});