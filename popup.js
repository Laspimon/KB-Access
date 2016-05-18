// Copyright (c) 2016 Casper Lehmann. All rights reserved.

chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    insert(url);
});

function insert(old_url){
    var cutoff = old_url.indexOf('/',7);
    var new_url = old_url.substring(0, cutoff) + ".ep.fjernadgang.kb.dk" + old_url.substring(cutoff);
    // alert(new_url);
    chrome.tabs.update(null, {url: new_url});
}
