(function () {
  "use strict";

  function reportCrate() {
    console.log("[SEVENFOLD] Cold vault is sealed. The readout is empty on purpose.");
    console.log("[SEVENFOLD] The vault is described by the stylesheet that paints it.");
  }

  function reportRelay() {
    var packet = document.getElementById("packet");
    if (!packet) {
      return;
    }
    console.log("[SEVENFOLD] relay packet declared with " + packet.attributes.length + " attributes.");
    console.log("[SEVENFOLD] inspect the packet element to read its position, integrity and payload.");
  }

  function boot() {
    reportCrate();
    reportRelay();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
