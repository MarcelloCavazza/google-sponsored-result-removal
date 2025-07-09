// ==UserScript==
// @name         Google Sponsored result removal
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Google Sponsored result removal
// @author       Marcello Cavazza
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var timeout = 1;
    setInterval(() =>
      {
        var sponsored = document.getElementById('taw');
        if (sponsored != null)
        {
          sponsored.style.display = 'none';
        }

        timeout += 1000;
      },
    timeout);
})();