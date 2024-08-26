const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

let gameState = {
  board: Array(5).fill().map(() => Array(5).fill(null)),
  currentPlayer: 'A',
  players: {},
  moveHistory: []
};

const pieces = {
  'HP': { name: 'Pawn1', moves: ['F', 'B', 'L', 'R', 'FL', 'FR', 'BL', 'BR'], range: 1 },
  'HP': { name: 'Pawn2', moves: ['F', 'B', 'L', 'R', 'FL', 'FR', 'BL', 'BR'], range: 1 },
  'H1': { name: 'Hero1', moves: ['F', 'B', 'L', 'R'], range: 2 },
  'H2': { name: 'Hero2', moves: ['FL', 'FR', 'BL', 'BR'], range: 2 },
  'H3': { name: 'Hero3', moves: ['FL', 'FR', 'BL', 'BR', 'RF', 'RB', 'LF', 'LB'], range: 3 }
};

function initializeGame() {
  gameState.board = [
    ['A-HP', 'A-H1', 'A-H2', 'A-H3', 'A-HP'],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    ['B-HP', 'B-H1', 'B-H2', 'B-H3', 'B-HP']
  ];
  gameState.currentPlayer = 'A';
  gameState.moveHistory = [];
}


function isValidMove(player, fromX, fromY, toX, toY) {
  const piece = gameState.board[fromY][fromX];
  if (!piece || piece[0] !== player) return false;

  const [, type] = piece.split('-');
  const dx = toX - fromX;
  const dy = toY - fromY;

  // Check if move is out of board bounds
  if (toX < 0 || toX > 4 || toY < 0 || toY > 4) return false;

  // Check if the target position is occupied by the player's own piece
  if (gameState.board[toY][toX] && gameState.board[toY][toX][0] === player) return false;

  // Pawn-specific movement rules
  if (type.startsWith('P')) {
      if (player === 'A' && (dy !== -1 || Math.abs(dx) > 1)) return false; // Player A pawns can only move up
      if (player === 'B' && (dy !== 1 || Math.abs(dx) > 1)) return false;  // Player B pawns can only move down
  }

  // Other pieces' logic can be added here

  return true;
}

function processMove(player, fromX, fromY, toX, toY) {
  const piece = gameState.board[fromY][fromX];
  const capturedPiece = gameState.board[toY][toX];
  
  gameState.board[toY][toX] = piece;
  gameState.board[fromY][fromX] = null;
  
  const moveDescription = `${piece}: (${fromX},${fromY}) to (${toX},${toY})${capturedPiece ? ` capturing ${capturedPiece}` : ''}`;
  gameState.moveHistory.push(moveDescription);
  
  gameState.currentPlayer = gameState.currentPlayer === 'A' ? 'B' : 'A';
  return true;
}

function checkGameOver() {
  const aHeroes = gameState.board.flat().filter(cell => cell && cell.startsWith('A-H')).length;
  const bHeroes = gameState.board.flat().filter(cell => cell && cell.startsWith('B-H')).length;
  const aPawn = gameState.board.flat().filter(cell => cell && cell.startsWith('A-P')).length;
  const bPawn = gameState.board.flat().filter(cell => cell && cell.startsWith('B-P')).length;
  if (aHeroes === 0 && aPawn===0) return 'B';
  if (bHeroes === 0 && bPawn===0) return 'A';
  if (gameState.moveHistory.length >= 100) return 'draw';
  return null;
}

io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('joinGame', (player) => {
    if (!gameState.players[player]) {
      gameState.players[player] = socket.id;
      socket.emit('playerAssigned', player);
      
      if (Object.keys(gameState.players).length === 2) {
        initializeGame();
        io.emit('gameStart', gameState);
      }
    } else {
      socket.emit('gameUpdate', gameState);
    }
  });
  
  socket.on('move', ({ player, fromX, fromY, toX, toY }) => {
    if (player === gameState.currentPlayer && isValidMove(player, fromX, fromY, toX, toY)) {
      processMove(player, fromX, fromY, toX, toY);
      io.emit('gameUpdate', gameState);
      
      const result = checkGameOver();
      if (result) {
        io.emit('gameOver', { result });
      }
    } else {
      socket.emit('invalidMove');
    }
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    Object.keys(gameState.players).forEach(player => {
      if (gameState.players[player] === socket.id) {
        delete gameState.players[player];
      }
    });
    if (Object.keys(gameState.players).length < 2) {
      gameState = {
        board: Array(5).fill().map(() => Array(5).fill(null)),
        currentPlayer: 'A',
        players: {},
        moveHistory: []
      };
      io.emit('gameReset');
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
