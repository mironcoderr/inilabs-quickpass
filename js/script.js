// FOR TABLE ACTION MENU
document.querySelectorAll(".table-action-btn").forEach((item)=> {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        const tableAction = item.closest(".table-action-group").querySelector(".table-action-menu");
        if(item.innerHTML != "more_vert") {
            item.innerHTML = "more_vert";
            tableAction.style.display = "none";
        }
        else {
            item.innerHTML = "close";
            tableAction.style.display = "block";
        }
    })
})

// FOR TAB BUTTONS
const tabBtns = document.querySelectorAll(".tab-btn");
tabBtns.forEach((btn)=> {
    btn.addEventListener("click", (event)=> {
        event.preventDefault();
        tabBtns.forEach(allBtns => allBtns.classList.remove("active"));
        event.target.classList.add("active");
    })
})
