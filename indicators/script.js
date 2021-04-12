class ColoredButtons {
    constructor() {
        let indicators = document.querySelectorAll(".class-indicator");
        this._blue = document.querySelector("#blue-indicator");
        this._yellow = indicators[0];
        this._green = indicators[1];

        let defaultValue = 1;
        this._y = defaultValue;
        this._b = 1;
        this._g = defaultValue;
        this.updateYellowIndicator(defaultValue);
        this.updateBlueIndicator();
        this.updateGreenIndicator(this._g);

        let yellowBtn = document.querySelector("#yellow-btn");
        let blueBtn = document.querySelector("#blue-btn");
        let greenBtn = document.querySelector(".green-class-btn");

        yellowBtn.addEventListener("click", this.btnClick.bind(this, "y"));
        blueBtn.addEventListener("click", this.btnClick.bind(this, "b"));
        greenBtn.addEventListener("click", this.btnClick.bind(this, "g"));
    }

    updateYellowIndicator(value) {
        this._yellow.innerHTML = value;
    }

    updateBlueIndicator() {
        this._blue.innerHTML = this._b;
    }

    updateGreenIndicator(value) {
        this._green.innerHTML = value;
    }

    btnClick(color) {
        switch (color) {
            case "y":
                this._y += 1;
                this.updateYellowIndicator(this._y);
                break;
            case "b":
                this._b += 2;
                this.updateBlueIndicator();
                break;
            case "g":
                this._g += 3;
                this.updateGreenIndicator(this._g);
                break;
        }
    }
}

let object = new ColoredButtons();