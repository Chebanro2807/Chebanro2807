class Nav {
    constructor() {
        this._menuEl = document.querySelector('.nav_wrap');
        this._hamburgerEl = document.querySelector('.transform-hamburger');
        this._navEl = document.querySelector('.nav_wrap');
        this.menuHide = document.querySelector('.nav_wrap')

        this._hamburgerEl.addEventListener('click', this.toggle.bind(this));
        this.menuHide.addEventListener('click', this.toggle.bind(this));
    }

    show() {
        console.log("1")
        this._hamburgerEl.classList.add('transform-hamburger--transformed');
        this._navEl.classList.add('menu__wrapper--open');
    }

    hide() {
        
        console.log("2")
        this._hamburgerEl.classList.remove('transform-hamburger--transformed');
        this._navEl.classList.remove('menu__wrapper--open');
    }

    toggle() {
        
        console.log("3")
        this._hamburgerEl.classList.toggle('transform-hamburger--transformed');
        this._navEl.classList.toggle('menu__wrapper--open');
    }
}

new Nav();