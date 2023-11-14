const btnEl = document.querySelector(".btn");  /* get Element by class*/

btnEl.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px"); /*Ref. style sheet line 43 and 44*/
    btnEl.style.setProperty("--yPos", y + "px");
})