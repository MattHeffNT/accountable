'use strict';

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

let text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a');

for (let i = 0; i < text.length; i++) {

  if (text[i].innerHTML.includes('cancel culture')) {
    text[i].innerHTML = text[i].innerHTML.replace('cancel culture','accountability*')
  }
  else if (text[i].innerHTML.includes('Cancel culture')) {
    text[i].innerHTML = text[i].innerHTML.replace('Cancel culture','Accountability*')
  }
  else if (text[i].innerHTML.includes('Cancel Culture')) {
    text[i].innerHTML = text[i].innerHTML.replace('Cancel Culture','Accountability*')
  }

}