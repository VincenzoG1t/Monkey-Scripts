// ==UserScript==
// @name         Auto Click Refresh Button for Datadog Zendesk
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Automatically clicks on the refresh button on the views pane every second.
// @author       Vincenzo
// @match        *://example.zendesk.com/agent/filters/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Function to click the desired button element
    function clickButton() {
        // Select the button based on its unique data-test-id attribute
        const button = document.querySelector('button[data-test-id="views_views-list_header-refresh"]');
        if (button) {
            button.click();
            console.log('Refresh button clicked!');
        } else {
            console.log('Refresh button not found, will try again in 1 second.');
        }
    }

    // Set interval to click every second (1000 milliseconds)
    setInterval(clickButton, 5000);
})();
