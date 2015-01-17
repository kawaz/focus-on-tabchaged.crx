[ {url:/^https?:\/\/www.google.(.*)\/search/, selector:"input[name=q]"}
, {url:/^https?:\/\/search.books.rakuten.co.jp\//, selector:"#searchWords"}
, {url:/^https?:\/\/order.my.rakuten.co.jp\//, selector:"#inputSearch"}
, {url:/^http:\/\/[\w\.]+\.alc.co.jp\//, selector:"#q"}
].forEach(function(o){
  if(o.url.test(location.href)) {
    addFocusTarget(o.selector);
  }
});
function addFocusTarget(selector) {
  //ページ読み込み
  document.addEventListener("DOMContentLoaded", function(){
    var elm = document.querySelector(selector);
    if(elm) {
      //初回自動フォーカス
      elm.focus();
      elm.select();
      //貼付け時自動検索追加
      elm.addEventListener('paste', function(e){
        setTimeout(function(){
          elm.form && elm.form.submit();
        }, 0);
      });
    }
  }, false);
  //タブ移動時自動フォーカス
  document.addEventListener("webkitvisibilitychange", function(){
    if("visible" == document.webkitVisibilityState) {
      var elm = document.querySelector(selector);
      if(elm) {
        elm.focus();
        elm.select();
      }
    }
  });
}
