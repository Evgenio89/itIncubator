
const  sml = document.getElementById("small")
const  mdm = document.getElementById("medium")
const  big = document.getElementById("big")
const  a = document.getElementById('a')

function onClickHandler (e) {
    e.preventDefault()
    console.dir(e.currentTarget.tagName)
}

/*
sml.onclick = onClickHandler
mdm.onclick = onClickHandler
big.onclick = onClickHandler*/
sml.addEventListener("click", onClickHandler)
mdm.addEventListener("click", onClickHandler)
big.addEventListener("click", onClickHandler)

a.addEventListener('click' , onClickHandler)


