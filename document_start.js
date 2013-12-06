[ {url:/^https?:\/\/www.google.(.*)\/search/, selector:"input[name=q]"}
, {url:/^http:\/\/search.books.rakuten.co.jp\//, selector:"#searchWords"}
, {url:/^https:\/\/order.my.rakuten.co.jp\//, selector:"input[name=search_item]"}
].forEach(function(o){
    if(o.url.test(location.href)) {
      addFocusTarget(o.selector);
    }
});
function addFocusTarget(selector) {
  document.addEventListener("webkitvisibilitychange", function(){
      if("visible" == document.webkitVisibilityState) {
        var elm = document.querySelector(selector);
        if(elm) {
          elm.focus();
          elm.select();
        }
      }
  }, false);
}
