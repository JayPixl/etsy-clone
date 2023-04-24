function loadNavAnimations() {
    const inputs = document.getElementsByClassName('searchinput');
    const searchbars = document.getElementsByClassName('searchbar');
    for (let i=0; i<inputs.length; i++) {
        inputs[i].addEventListener('focus', e => {
            searchbars[i].classList.toggle('active');
        })
        inputs[i].addEventListener('blur', e => {
            searchbars[i].classList.toggle('active');
        })
    }

    const links = document.getElementsByClassName('links');
    for (let i=0; i<links.length; i++) {
        links[i].addEventListener('click', e => {
            links[i].classList.toggle('active');
        })
    }

    const [emailinput] = document.getElementsByClassName('emailinput');
    const [emailbar] = document.getElementsByClassName('emailbar');
    emailinput.addEventListener('focus', e => {
        emailbar.classList.toggle('active');
    })
    emailinput.addEventListener('blur', e => {
        emailbar.classList.toggle('active');
    })

    const [hamburger] = document.getElementsByClassName('hamburger');
    const [xbutton] = document.getElementsByClassName('xbutton');
    const [nav] = document.getElementsByClassName('linkslist');
    const [cover] = document.getElementsByClassName('covering');
    hamburger.addEventListener('click', e => {
        nav.classList.toggle('active');
        cover.classList.toggle('active');
    })
    xbutton.addEventListener('click', e => {
        nav.classList.toggle('active');
        cover.classList.toggle('active');
    })
    cover.addEventListener('click', e => {
        nav.classList.toggle('active');
        cover.classList.toggle('active');
    })
}

loadNavAnimations();