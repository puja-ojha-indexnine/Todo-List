/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
window.onload = () => {
    const form1 = document.querySelector("#addForm");
  
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
  
    let editItem = null;
  
    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};
  
function addItem(e) {
    e.preventDefault();
  
    if (submit.value != "Submit") {
        console.log("Hello");
  
        editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;
  
        submit.value = "Submit";
        document.getElementById("item").value = "";
  
        document.getElementById("lblsuccess").innerHTML = "Text edited successfully";
  
        document.getElementById("lblsuccess").style.display = "block";
  
        setTimeout(function() {
            document.getElementById("lblsuccess").style.display = "none";
        }, 3000);
  
        return false;
    }
  
    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";
  
    let li = document.createElement("li");
    li.className = "list-group-item";
  
    let deleteButton = document.createElement("button");
  
    deleteButton.className = "btn-delete delete";
    deleteButton.style.marginLeft = "80%";
    deleteButton.style.marginRight = "auto";
    deleteButton.appendChild(document.createTextNode("Delete"));
  
    let editButton = document.createElement("button");
    
  
    editButton.className = "btn-edit edit";
  
    editButton.appendChild(document.createTextNode("Edit"));
  
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);
  
    items.appendChild(li);
}
  
function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("lblsuccess").innerHTML
                = "Text deleted successfully";
  
            document.getElementById("lblsuccess")
                        .style.display = "block";
  
            setTimeout(function() {
                document.getElementById("lblsuccess")
                        .style.display = "none";
            }, 3000);
        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value =
            e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}
  
/*function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}*/
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtdjIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEZvcm1cIik7XHJcbiAgXHJcbiAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zXCIpO1xyXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xyXG4gIFxyXG4gICAgbGV0IGVkaXRJdGVtID0gbnVsbDtcclxuICBcclxuICAgIGZvcm0xLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkSXRlbSk7XHJcbiAgICBpdGVtcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlSXRlbSk7XHJcbn07XHJcbiAgXHJcbmZ1bmN0aW9uIGFkZEl0ZW0oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgaWYgKHN1Ym1pdC52YWx1ZSAhPSBcIlN1Ym1pdFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiKTtcclxuICBcclxuICAgICAgICBlZGl0SXRlbS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1cIikudmFsdWU7XHJcbiAgXHJcbiAgICAgICAgc3VibWl0LnZhbHVlID0gXCJTdWJtaXRcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1cIikudmFsdWUgPSBcIlwiO1xyXG4gIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGJsc3VjY2Vzc1wiKS5pbm5lckhUTUwgPSBcIlRleHQgZWRpdGVkIHN1Y2Nlc3NmdWxseVwiO1xyXG4gIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGJsc3VjY2Vzc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIFxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGJsc3VjY2Vzc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV0IG5ld0l0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1cIikudmFsdWU7XHJcbiAgICBpZiAobmV3SXRlbS50cmltKCkgPT0gXCJcIiB8fCBuZXdJdGVtLnRyaW0oKSA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2VcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1cIikudmFsdWUgPSBcIlwiO1xyXG4gIFxyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW1cIjtcclxuICBcclxuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIFxyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwiYnRuLWRlbGV0ZSBkZWxldGVcIjtcclxuICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI4MCVcIjtcclxuICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRGVsZXRlXCIpKTtcclxuICBcclxuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIFxyXG4gIFxyXG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcImJ0bi1lZGl0IGVkaXRcIjtcclxuICBcclxuICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJFZGl0XCIpKTtcclxuICBcclxuICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld0l0ZW0pKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICBcclxuICAgIGl0ZW1zLmFwcGVuZENoaWxkKGxpKTtcclxufVxyXG4gIFxyXG5mdW5jdGlvbiByZW1vdmVJdGVtKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3UgU3VyZT9cIikpIHtcclxuICAgICAgICAgICAgbGV0IGxpID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgaXRlbXMucmVtb3ZlQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxibHN1Y2Nlc3NcIikuaW5uZXJIVE1MXHJcbiAgICAgICAgICAgICAgICA9IFwiVGV4dCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiO1xyXG4gIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxibHN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxibHN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXRcIikpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1cIikudmFsdWUgPVxyXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uZGF0YTtcclxuICAgICAgICBzdWJtaXQudmFsdWUgPSBcIkVESVRcIjtcclxuICAgICAgICBlZGl0SXRlbSA9IGU7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLypmdW5jdGlvbiB0b2dnbGVCdXR0b24ocmVmLCBidG5JRCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnRuSUQpLmRpc2FibGVkID0gZmFsc2U7XHJcbn0qLyJdLCJzb3VyY2VSb290IjoiIn0=