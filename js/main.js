import Box from "./boxCls.js"
import { store } from "./storeOBj.js"

window.onload = () => {
    init()
}

const init = () => {
    createBoxes()
    startGame()
}

const startGame = () => {
    store.tic_ar = [0,0,0,
        0,0,0,
        0,0,0]
}




// במציאות היה בקובצ מנג'ר של הקופסאות
const createBoxes = () => {
    store.tic_ar.map((item,i) => {
        let box = new Box("#id_row",i);
        box.render()
    })
}