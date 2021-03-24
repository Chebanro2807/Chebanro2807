let imgArray = document.querySelectorAll('.js-open-modal');
let overlay = document.querySelector('.js-modal-overlay');
let crossArray = document.querySelectorAll('.js-modal-close');

imgArray.forEach(function(item){
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let modalName = item.getAttribute('data-modal');
        let modal = document.querySelector('.js-modal[data-modal="' + modalName + '"]');
        modal.classList.add('is-show');
        overlay.classList.add('is-show');
    });
});

crossArray.forEach(function(cross){

    cross.addEventListener('click', function(){
        let allShowArr = document.querySelectorAll('.is-show');
        allShowArr.forEach(function(e){
            e.classList.remove('is-show');
        })
        /*let parent = this.parentNode;
        parent.classList.remove('is-show');
        overlay.classList.remove('is-show');*/
    });
});

overlay.addEventListener('click', function(){
    let allShowArr = document.querySelectorAll('.is-show');
    allShowArr.forEach(function(e){
        e.classList.remove('is-show');
    });
});