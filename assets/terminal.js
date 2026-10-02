(function () {
  "use strict";

  var NODE = "SEVENFOLD";
  var RECEIPT = "ff7_cookie=cjNxdTFyM18=; path=/; SameSite=Lax";

  function issueReceipt() {
    document.cookie = RECEIPT;
  }

  function readReceipt() {
    return document.cookie;
  }

  function inspectTerminal() {
    var out = document.getElementById("out");

    console.clear();
    console.log("[" + NODE + "] FOURTH  -> cookie named ff7_cookie");
    console.log("[" + NODE + "] FIFTH   -> runtime JavaScript packet, mounted by runtime.js");
    console.log("[" + NODE + "] SIXTH   -> URL hash, Base64 applied twice, so decode in two passes");
    console.log("[" + NODE + "] current cookies:", readReceipt());
    console.log("[" + NODE + "] current location hash:", location.hash || "empty, follow the TRACE link first");

    if (out) {
      out.textContent = "Scan complete. Four surfaces answered from this node: cookie, runtime packet, URL hash, console.";
    }
  }

  function boot() {
    issueReceipt();

    var trigger = document.querySelector("[data-action='scan']");
    if (trigger) {
      trigger.addEventListener("click", inspectTerminal);
    }

    console.log("[" + NODE + "] terminal node sealed. A receipt was written on arrival.");
  }

  window.inspectTerminal = inspectTerminal;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
