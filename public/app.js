document.addEventListener('DOMContentLoaded', function() {
    var rowsElt = document.querySelector('.rows');

    var rowElt;
    for (var i = 0; i < 100; i++) {
        rowElt = document.createElement('div');
        rowElt.innerText = i.toString();
        rowsElt.appendChild(rowElt);
    }
});
