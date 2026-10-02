(function () {
  "use strict";

  var NODE = "SEVENFOLD";

  var runtimePacket = {
    position: "FIFTH",
    integrity: "c31e7566c2",
    payload: "Y3IwNTVfcDRnM18="
  };

  function boot() {
    console.log("[" + NODE + "] runtime packet mounted.");
    console.log("[" + NODE + "] position -> " + runtimePacket.position);
    console.log("[" + NODE + "] payload lives at runtimePacket.payload; it is Base64.");
  }

  window.runtimePacket = runtimePacket;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
