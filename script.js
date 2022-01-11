// ==UserScript==
// @name         Remove shite results
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.google.com/search*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const blockedSites = [
    "https://pretagteam.com",
    "https://www.codegrepper.com",
    "https://geeksqa.com",
    "https://www.adoclib.com",
  ];

  let count = 0;
  blockedSites.forEach((blockedSite) => {
    const links = document.querySelectorAll(`a[href^='${blockedSite}']`);
    links.forEach((link) => {
      link.parentElement.parentElement.remove();
      count++;
    });
  });

  console.log(`Removed ${count} results.`);
})();
