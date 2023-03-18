const newContent =document.getElementById("addContent");
const showContent = document.getElementById("hiddenBox");
const removeContent = document.getElementById("removeContent");
newContent.addEventListener("click",function () {
    showContent.style.display="block";
});

removeContent.addEventListener("click",function remove() {
    showContent.style.display="none";
})