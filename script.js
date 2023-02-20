
/* MAP HOVER CONTROLS */
map.scrollWheelZoom.disable();
let getMap = document.getElementById("map");
getMap.onclick = function() {  
    map.scrollWheelZoom.enable();
};  
getMap.addEventListener("mouseleave", function() {   
    /* reset the zoom control after a short delay */
    setTimeout(function() {
        map.scrollWheelZoom.disable();
    }, 1000);
}, false);
