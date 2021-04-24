class Slider {
    constructor() {
        this._item1 = document.querySelector('#id1');
        this._item2 = document.querySelector('#id2');
        this._item3 = document.querySelector('#id3');
        this._item4 = document.querySelector('#id4');

        this._buttonNext = document.querySelector('.next');
        this._buttonPrev = document.querySelector('.prev');

        this._buttonNext.addEventListener('click', this.showNext.bind(this));
    }

    showNext() {
        
    }
}


//!
new Slider();