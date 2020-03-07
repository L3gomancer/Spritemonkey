// ==UserScript==
// @name         Spritemonkey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try
// @author       Legomancer
// @match        https://www.spriters-resource.com/*
// @grant        GM_download
// ==/UserScript==

// on key press "d"
document.addEventListener("keyup", event => {
  if (event.code == "KeyD") {
    // download image
    let srce = document
      .querySelector('img[src*="/resources/sheets"]')
      .getAttribute("src");
    GM_download({ url: srce, name: "spsheet.png" });

    // click next
    event.preventDefault();
    let next = document.querySelector('img[alt="Next"]');
    next.click();
  }
});
