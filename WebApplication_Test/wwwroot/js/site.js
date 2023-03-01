// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var id = null;
function myMove() {
    console.log('move starting!');
    var elem = document.getElementById("ani-start");
    var pos = 0;
    var szeX = 200;
    clearInterval(id);
    id = setInterval(frame, 3);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            szeX += 2;
            elem.style.top = pos + 'px';
            elem.style.width = szeX + 'px';
        }
    }
}