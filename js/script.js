const actionBtn = document.querySelector('.action-btn');

actionBtn.addEventListener('click', function(){
    console.log(actionBtn.innerHTML)

    if(!actionBtn.innerHTML == "more_vert") {
        actionBtn.innerHTML = "close"
    }
    else {
        actionBtn.innerHTML = "more_vert"
    }
});