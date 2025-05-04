const ticTacToe = (function () {

    function Cell() {
        let value = '';
        
    
      const assignValue = (token) => {
        value = token;
      }
    
      const getValue = () => value;
    
      return {assignValue, getValue};
    
    }
    
    const board = (function () {
        const rows = 3;
        const columns = 3 ;
        const board = [];
    
        for (let i = 0; i< rows; i++){
            board[i]=[];
            for (let j = 0; j<columns;j++){
                board[i].push(Cell());
            }
        }
        
        const printBoard = () => {
            const boardWithValue = board.map((row) => row.map((cell) => cell.getValue()));
            console.log(boardWithValue);
        };
    
        const assignToken = (cell, token) => {
            const row = cell[0];
            const column = cell[1];
            if(board[row][column].getValue() != ''){
                return false;
            }else{
                board[row][column].assignValue(token);
                return true;
            }
        }
        
        const getBoard = () => board;
    
        return {getBoard, printBoard, assignToken};
    }) ();
    
    const game = (function (
        playerOne = "player one",
        playerTwo = "player two"
    ) { 
    
        const players =[
            {
                name: playerOne,
                token: 'o'
            },
            {
                name: playerTwo,
                token: 'x'
            }
        ];
    
        let activePlayer = players[0];
    
        const switchPlayerTurn = () => {
            activePlayer = activePlayer === players[0] ? players[1] : players[0];
        }
    
        const getActivePlayer = () => activePlayer;
    
        const printNewRound = () => {
            console.log(`${getActivePlayer().name}'s turn`);
            board.printBoard();
        };
    
        const checkWinner = () => {
            for(let i = 0; i < 3; i++){
                let table = board.getBoard();
                if(
                    table[i][0].getValue() &&
                    table[i][0].getValue() === table[i][1].getValue() &&
                    table[i][0].getValue() === table[i][2].getValue()
                ){
                    console.log('yohoo')
                    return table[i][0].getValue();
                } 
            }
    
            for(let j = 0; j < 3; j++){
                let table = board.getBoard();table
                if(
                    table[0][j].getValue() &&
                    table[0][j].getValue() === table[1][j].getValue() &&
                    table[0][j].getValue() === table[2][j].getValue()
                ){
                    console.log('yohoo')
                    return table[0][j].getValue();
                } 
            }
    
            for (let i = 0; i < 3; i++) {
                let table = board.getBoard();table
                if(
                    table[0][0].getValue() &&
                    table[0][0].getValue() === table[1][1].getValue() &&
                    table[0][0].getValue() === table[2][2].getValue()
                ){
                    console.log('yohoo');
                    return table[0][0].getValue();
                }
            }
    
            for (let i = 0; i < 3; i++) {
                let table = board.getBoard();table
                if(
                    table[0][2].getValue() &&
                    table[0][2].getValue() === table[1][1].getValue() &&
                    table[0][2].getValue() === table[2][0].getValue()
                ){
                    console.log('yohoo');
                    return table[0][2].getValue();
                }
            }
        }
    
        const playNewRound = (row, column) => {
            if(board.assignToken([row, column], activePlayer.token)){
                switchPlayerTurn();
            } else {
                console.log('taken, please choose another cell.')
            }
            if(checkWinner()){
                console.log('hi')
            } else {
                printNewRound();   
            }
        }
    
        printNewRound();
    
        return {getActivePlayer, switchPlayerTurn, printNewRound, playNewRound}
    }) ();
    
})();


