(function() {
    const webview = document.getElementById('content')
    webview.addEventListener('dom-ready', () => {
        document.getElementById('title').innerHTML = webview.getTitle()
    })

    function back () {
        if (webview.canGoForward()) {
            webview.goBack();
        }
    }
    function forward () {
        if (webview.canGoForward()) {
            webview.goForward();
        }
    }

    if (process.platform !== 'darwin') {
      document.getElementById('menu').style.marginLeft = "0.5em";
    }

})();
