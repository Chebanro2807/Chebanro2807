function InputField(props) {
    this._props = props;
    this._props.addEventListener("change", this.validate.bind(this));
}

InputField.prototype.deletePrompt = function() {
    let deletePrompt = this._props.parentNode.querySelector(".prompt");
    if (deletePrompt) { 
        this._props.parentNode.removeChild(deletePrompt);
        this._props.style.border = "1px solid #c9c9c9";
    } 
}

InputField.prototype.validate = function() {
    this.deletePrompt();
    if (this._props.id === "userMessage") return;
    if (!this.validateElement(this._props)) {
        this.createPrompt((this._props.id === "userName") ? "Username must have alphabet characters only"
            : (this._props.id === "phone") ? "Phone must have 10 numbers" 
            : (this._props.id === "userEmail") ? "You have entered an invalid email address!"
            : "ERROR");
    }
}

InputField.prototype.validateElement = function(elem) {
    return (elem.value.match(elem.getAttribute("pattern")));
}

InputField.prototype.createPrompt = function(message) {
    this._props.style.border = "1px solid red";
    let prompt = document.createElement("div");
    prompt.className = "prompt";
    prompt.innerHTML = message;
    this._props.parentNode.appendChild(prompt);
}

//-----

function FormSubmit(props) {
    this._props = props;
    this._inputArr = [
        new InputField(this._props.querySelector("#userName")),
        new InputField(this._props.querySelector("#phone")),
        new InputField(this._props.querySelector("#userEmail")),
        new InputField(this._props.querySelector("#userMessage"))
    ];
    this._props.querySelector("#btnSend").addEventListener("click", this.validate.bind(this));
}

FormSubmit.prototype.validate = function() {
    this.deleteBigPrompt();
    let isSubmited = true;
    this._inputArr.forEach(elem => {
        let validatedItem = this.validateInput(elem);
        if (!validatedItem) {
            this.createBigPrompt("Будь ласка, заповніть усі обов’язкові поля");
        }
        isSubmited = isSubmited && validatedItem;
    });
    if (isSubmited) {
        this._props.submit();
    }
}

FormSubmit.prototype.validateInput = function(inputField) {
    inputField.deletePrompt();
    if (!inputField._props.value) {
        inputField.createPrompt("Будь ласка, заповніть усі обов’язкові поля");
        return false;
    }
    return true;
}

FormSubmit.prototype.deleteBigPrompt = function() {
    let deleteBigPrompt = this._props.querySelector(".big_prompt");
    if (deleteBigPrompt) { 
        let bigPromptWrap = this._props.querySelector(".form_wrap");
        bigPromptWrap.removeChild(deleteBigPrompt);
    } 
}

FormSubmit.prototype.createBigPrompt = function(massage) {
    let deleteBigPrompt = this._props.querySelector(".big_prompt");
    if (!deleteBigPrompt) { 
        let bigPromptWrap = this._props.querySelector(".form_wrap");
        let createPrompt = document.createElement("div");
        createPrompt.classList.add("big_prompt");
        createPrompt.innerHTML = massage;
        bigPromptWrap.appendChild(createPrompt);
    }
}

//-----------------------


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

const submit = new FormSubmit(document.querySelector("#sendForm"));