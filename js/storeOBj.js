export const store = {
    playerTurn: 1,
    whoWin:"none",
    tic_ar: [0,0,0,
        0,0,0,
        0,0,0]
}


export const changeBoardAr = (_index,_val) => {
    store.tic_ar[_index] = _val ;
    (_val == 1)? store.playerTurn = 2 : store.playerTurn = 1;
}