(() => {
  const onBoardStateChange = (oldState, newState) => {
    console.log("old: " + Chessboard.objToFen(oldState));
    console.log("new: " + Chessboard.objToFen(oldState));
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  }
  const board = Chessboard("board", {
    draggable: true,
    showNotation: false,
    position: "start",
    pieceTheme: "https://chessboardjs.com/img/chesspieces/alpha/{piece}.png",
  });
})();
