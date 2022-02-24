import { store, changeBoardAr } from "./storeOBj.js";

class Box{
    constructor(_parent,_id){
        this.parent = _parent;
        this.id = _id;
    }

    render(){
        let newDiv = document.createElement("div");
        newDiv.className = "box";
        document.querySelector(this.parent).append(newDiv);

        newDiv.addEventListener("click",() => {
           // alert(this.id)
           // newDiv.innerHTML = `<div class="symbol">X</div>`
            if(store.playerTurn == 1){
                newDiv.innerHTML = `<div class="symbol">X</div>`
            }
            else{
                newDiv.innerHTML = `<div class="symbol">O</div>`
            }
            changeBoardAr(this.id,store.playerTurn)
        })
    }
}

export default Box;