var id = 100;

chrome.runtime.onMessage.addListener(function (obj, sender, response){
  var num = obj.num;
  init(num);
});
function init(num) {
   console.log("init() num " + num);
     chrome.tabs.query({'currentWindow': true,'active': true}, function(taburl){
       console.log("init()->set()->query()");
       console.log(taburl[0].url);
       var link = taburl[0].url;
       var reg = /(\d+)[!]/;
       var arr = link.match(reg);
       console.log(arr);
       var s = arr[1];
       var int = parseInt(s);
       chrome.storage.local.set({'curr_page_specified_VSbs': int}, function() {
           console.log("storeCurrent()");

       });
                main(num);
   });

}
//----------------------------------------------------------------------------//

function storeCurrent(int) {
  chrome.storage.local.set({'curr_page_specified_VSbs': int}, function() {
      console.log("storeCurrent()");
  });
}

//----------------------------------------------------------------------------//

//Main function
function main(total) {
  console.log("main()");
                    var page;
                    var newUrl;
                    var current;
                    var total;
              (function theLoop(i) {
                setTimeout(function() {
                  console.log("Loop total: " + total);

                  chrome.storage.local.get(['curr_page_specified_VSbs'], function(result) {
                  current = parseInt(result.curr_page_specified_VSbs);
                  current = current + 1;
                  storeCurrent(current);
                  //capture

                  console.log("capture()");
                  chrome.tabs.captureVisibleTab(function(screenshotUrl) {
                      var viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++)
                      var targetId = null;

                      chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
                        if (tabId != targetId || changedProps.status != "complete")
                          return;
                        chrome.tabs.onUpdated.removeListener(listener);

                        var views = chrome.extension.getViews();
                        for (var i = 0; i < views.length; i++) {
                          var view = views[i];
                          if (view.location.href == viewTabUrl) {
                            view.setScreenshotUrl(screenshotUrl);
                            break;
                          }
                        }
                      });

                      chrome.tabs.create({url: viewTabUrl}, function(tab) {
                        targetId = tab.id;
                      });
                      });

                    //Capture Ends , 'active': true
                  chrome.tabs.query({'currentWindow': true}, function(taburl){
                    newUrl = taburl[0].url.replace(/\d+([!])/, current + "$1");
                    chrome.tabs.query({'currentWindow': true}, function(tabs) {
                      chrome.tabs.update(tabs[0].id, {url: newUrl});
                    });
                    });
                  });
                  console.log("getCurrPageFromStore()");
                  if (--i) {          // If i > 0, keep going
                    theLoop(i);// Call the loop again, and pass it the current value of i
                            }
              //  });
            } , 10000);//Set Timeout end
          })(total); //Recursive Function end
        //  chrome.storage.local.clear();
            }
