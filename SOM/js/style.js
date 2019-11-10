document.querySelector('.c-hamburger').addEventListener('click', function(e){
    e.preventDefault();
    // this.classList.toggle('is-active');
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#h_menu').classList.remove('nav-active');
        document.body.classList.remove('body-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('#h_menu').classList.add('nav-active');
        document.body.classList.add('body-active');
    }
})