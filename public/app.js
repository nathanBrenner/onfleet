document.addEventListener("DOMContentLoaded", function () {
  const ws = new WebSocket(`ws://${location.host}`);
  ws.onopen = function (event) {
    console.log("WebSocket is open now.");
  };
  ws.onmessage = function (event) {
    const data = JSON.parse(event.data);
    console.log("d", data);
  };
  var rowsElt = document.querySelector(".rows");

  var rowElt;
  for (var i = 0; i < 100; i++) {
    rowElt = document.createElement("div");
    rowElt.innerText = i.toString();
    rowsElt.appendChild(rowElt);
  }
});
