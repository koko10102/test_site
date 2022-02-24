class Car{
    constructor(_name,_color){
        this.name = _name;
        this.color = _color;
    }

    showName(){
        document.body.innerHTML += `
            <h2>${this.name}</h2>
        `
        return this;
    }

    showColor(){
        document.body.innerHTML += `
            <h2>${this.color}</h2>
        `
        return this;
    }
}