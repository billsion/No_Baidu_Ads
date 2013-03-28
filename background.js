/*
 *
 *License: The MIT License (MIT) 
 *Copyright (c) 20013-2014 BillSion@gmail.com
 *Permission is hereby granted, free of charge, to any person obtaining a copy of this 
 *software and associated documentation files (the "Software"), to deal in the Software without restriction, 
 *including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 *and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
*/
function filterToggle() {
  chrome.browserAction.getTitle({}, function(result){
    if(result == 'disable'){
      chrome.browserAction.setIcon({path: "enabled.png"});  
      chrome.browserAction.setTitle({title: 'enable'});
      //filter Ads.
      filterAds();
    }else{
      chrome.browserAction.setIcon({path: "disabled.png"}); 
      chrome.browserAction.setTitle({title: 'disable'});
    }
  });
}

function filterAds(){
  chrome.tabs.executeScript(null, {
      file: 'remove.js'
    });
}

//event listener
chrome.browserAction.onClicked.addListener(filterToggle);
//init
//filterToggle();
