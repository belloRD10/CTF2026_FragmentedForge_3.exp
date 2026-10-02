(function () {
  "use strict";

  var LOCAL_KEY = "ff7_archive";
  var SESSION_KEY = "ff7_session";
  var LOCAL_PAYLOAD = "czN2M25fZnI0Z20zbnQ1Xw==";
  var SESSION_PAYLOAD = "aDRjazFuZ30=";

  function seed() {
    try {
      localStorage.setItem(LOCAL_KEY, LOCAL_PAYLOAD);
      sessionStorage.setItem(SESSION_KEY, SESSION_PAYLOAD);
    } catch (err) {
      return;
    }
  }

  function scan() {
    var out = document.getElementById("out");
    var local = null;
    var session = null;

    try {
      local = localStorage.getItem(LOCAL_KEY);
      session = sessionStorage.getItem(SESSION_KEY);
    } catch (err) {
      local = null;
      session = null;
    }

    console.clear();
    console.log("[ARCHIVE] Two separate storage mechanisms are loaded in this chamber.");
    console.log("[ARCHIVE] THIRD   -> localStorage, key " + LOCAL_KEY + " =", local);
    console.log("[ARCHIVE] SEVENTH -> sessionStorage, key " + SESSION_KEY + " =", session);
    console.log("[ARCHIVE] Session storage dies with the tab. Read it before you close it.");

    if (out) {
      out.textContent = local && session
        ? "Both chambers loaded. Long term -> localStorage, per tab -> sessionStorage. Read both in Developer Tools."
        : "Storage unavailable in this context. Check that cookies and site data are permitted.";
    }
  }

  function boot() {
    seed();

    var trigger = document.querySelector("[data-action='scan']");
    if (trigger) {
      trigger.addEventListener("click", scan);
    }
  }

  window.scan = scan;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
