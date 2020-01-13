export default function OnLocationChange(_callback) {
  var Location = this;
  Location.lastUrl = null;

  Location.events = function() {
    document.body.addEventListener(
      "DOMSubtreeModified",
      function() {
        var eventUrl = window.location.href;

        if (eventUrl !== Location.lastUrl) {
          _callback(eventUrl, Location.lastUrl);
          Location.lastUrl = eventUrl;
        }
      },
      false
    );
  };

  Location.init = new (function() {
    Location.lastUrl = window.location.href;
    Location.events();
  })();
}
