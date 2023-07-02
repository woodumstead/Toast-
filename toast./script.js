function toastx() {
    let x = document.getElementsByClassName("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
}