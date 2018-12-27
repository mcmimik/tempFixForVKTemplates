// ==UserScript==
// @name         Fix for Шаблоны сообщений ВКонтакте
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Temporary fix for renamed global variable (__stm was renamed to stManager)
// @author       mcmimik
// @match        https://vk.com/
// @grant        none
// ==/UserScript==

window.__stm = window.stManager;
