window.onload = function() {
    var loadingScreen = document.getElementById("loadingScreen");
    var loader = document.getElementById("loader");
    var loaderText = document.getElementById("loaderText");     
    loaderText.parentNode.removeChild(loaderText);
    loader.style.display = "none";
    if (document.readyState === "complete"){
        var loaderScreenWidth = setInterval(changeLoaderScreenWidth, 10);
        var slider = 100;
        function changeLoaderScreenWidth(){
            if (slider > 0){
                slider --;
                console.log(slider+"%");
                loadingScreen.style.width = slider+"%";
            }
            else {
                clearInterval(loaderScreenWidth);
                loadingScreen.style.display = "none";
            }
        }  
    }  
}