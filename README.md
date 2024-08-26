Turn-based Chess-like Game with Websocket Communication
Objective
Develop a turn-based chess-like game with a server-client architecture, utilizing websockets for real-time communication and a web-based user interface.
Game Rules
Game Setup
The game is played between two players on a 5x5 grid.
Each player controls a team of 5 characters, which can include Pawns, Hero1, and Hero2.
Players arrange their characters on their respective starting rows at the beginning of the game.

Characters and Movement
There are three types of characters available:
 1. Pawn:
Moves one block in any direction (Left, Right, Forward, or Backward).
Move commands: L (Left), R (Right), F (Forward), B (Backward)
2. Hero1:
Moves two blocks straight in any direction.
Kills any opponent's character in its path.
Move commands: L (Left), R (Right), F (Forward), B (Backward)
3. Hero2:
Moves two blocks diagonally in any direction.
Kills any opponent's character in its path.
Move commands: FL (Forward-Left), FR (Forward-Right), BL (Backward-Left), BR (Backward-Right)
All moves are relative to the player's perspective.
Move command format:
For Pawn and Hero1: <character_name>:<move> (e.g., P1:L, H1:F)
For Hero2: <character_name>:<move> (e.g., H2:FL, H2:BR)
Game Flow
Initial Setup:
Players deploy all 5 characters on their starting row in any order.
Character positions are input as a list of character names, placed from left to right.
Players can choose any combination of Pawns, Hero1, and Hero2 for their team.
Turns:
Players alternate turns, making one move per turn.
Combat:
If a character moves to a space occupied by an opponent's character, the opponent's character is removed from the game.
For Hero1 and Hero2, any opponent's character in their path is removed, not just the final destination.
Invalid Moves:
Moves are considered invalid if: a. The specified character doesn't exist. b. The move would take the character out of bounds. c. The move is not valid for the given character type. d. The move targets a friendly character.
Players must retry their turn if they input an invalid move.
Game State Display:
After each turn, the 5x5 grid is displayed with all character positions.
Character names are prefixed with the player's identifier and character type (e.g., A-P1, B-H1, A-H2).

Winning the Game:
The game ends when one player eliminates all of their opponent's characters.
The winning player is announced, and players can choose to start a new game.

Bonus Challenges
Implement additional character types with unique move patterns.
Add Hero3:
Movement: Moves 2 steps straight and one to the side in a single turn.
Attack: Kills only the character at its final landing position (if occupied by an opponent).
Move commands:
FL: 2 steps Forward, 1 step Left
FR: 2 steps Forward, 1 step Right
BL: 2 steps Backward, 1 step Left
BR: 2 steps Backward, 1 step Right
RF: 2 steps Right, 1 step Forward
RB: 2 steps Right, 1 step Backward
LF: 2 steps Left, 1 step Forward
LB: 2 steps Left, 1 step Backward
Example moves: H3:FR (2 front, 1 right), H3:RF (2 right, 1 front)
Implement a dynamic team composition feature:
Allow players to choose their team composition at the start of each game.
Ensure the game logic can handle any combination of character types.
Add a spectator mode for other clients to watch ongoing games.
Implement a chat feature for players to communicate during the game.
Create an AI opponent that can play the game using basic strategy.
Implement a replay system that allows players to review past games move by move.
Add a ranking system that tracks player performance across multiple games.

When implementing Hero3, consider the following:
Movement Validation:
Ensure that the entire path of Hero3's movement is within the bounds of the 5x5 grid.
Check for any obstructions (friendly characters) along the path.
Combat Mechanics:
Only check for and eliminate opponent characters at the final landing position.
Do not eliminate characters that Hero3 passes over during its movement.
User Interface:
Update the UI to clearly show the available moves for Hero3 when selected.
Consider using arrow indicators or highlighting the possible end positions.
Game Balance:
Assess how the addition of Hero3 affects overall game balance.
You may need to adjust the number of each character type allowed per team.
By implementing Hero3, students will gain experience in handling more complex movement patterns and expanding their game logic to accommodate new rules. This challenge encourages students to think about modular design and extensibility in their code.

