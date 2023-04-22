function loadNavAnimations() {
    const [input] = document.getElementsByClassName('searchinput');
    const [searchbar] = document.getElementsByClassName('searchbar');
    input.addEventListener('focus', e => {
        searchbar.classList.toggle('active');
    })
    input.addEventListener('blur', e => {
        searchbar.classList.toggle('active');
    })

    const [emailinput] = document.getElementsByClassName('emailinput');
    const [emailbar] = document.getElementsByClassName('emailbar');
    emailinput.addEventListener('focus', e => {
        emailbar.classList.toggle('active');
    })
    emailinput.addEventListener('blur', e => {
        emailbar.classList.toggle('active');
    })
}

loadNavAnimations();