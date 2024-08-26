Hi, I'm Prathamesh Mahesh Bhangale, a final-year Computer Science and Engineering student specializing in Information Security at VIT, Vellore.
As part of the interview process for the Software Engineer position at Hitwicket, I was tasked with completing an assignment that involved building a turn-based chess-like game .
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Turn-based Chess-like Game with Websocket Communication**

**Objective**
Develop a turn-based chess-like game with a server-client architecture, utilizing websockets for real-time communication and a web-based user interface.

Game Setup
The game is played between two players on a 5x5 grid.
Each player controls a team of 5 characters, which can include Pawns, Hero1, Hero2 and Hero3.

Players arrange their characters on their respective starting rows at the beginning of the game.

Characters and Movement
There are three types of characters available:
** 1. Pawn (HP):**
Moves one block in any direction (Left, Right, Forward, or Backward).
Move commands: L (Left), R (Right), F (Forward), B (Backward)
**2. Hero1:**
Moves two blocks straight in any direction.
Kills any opponent's character in its path.
Move commands: L (Left), R (Right), F (Forward), B (Backward)
**3. Hero2:**
Moves two blocks diagonally in any direction.
Kills any opponent's character in its path.
Move commands: FL (Forward-Left), FR (Forward-Right), BL (Backward-Left), BR (Backward-Right)
All moves are relative to the player's perspective.

**4. Hero3:**
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

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
TO RUN:

Download and install Git Bash.

Clone the repository using :
                                                command: "**git clone https://github.com/Pmbhangales/Prathamesh_Bhangale_21BCI0285.git**" in git bash
                   
Navigate to the project directory.
Install dependencies 
                                                 command: "**npm install**"


Start the application 
                                                 Command: "**npm run start**"

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
The application will start running, and you can access it by opening a web browser and navigating to the appropriate URL  **http://localhost:3000**

**open the URL in two browser to play Player A and Player B simultaneously.**

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Piece Movement Guide

Blue color is Player A

Yellow color is Player B

Pawn (HP): Moves 1 step in any direction ( ↑ , ↓ , ← , → , ↖ , ↗ , ↙ , ↘ )

Hero1 (H1): Moves up to 2 steps in any direction ( ↑ , ↓ , ← , → )

Hero2 (H2): Moves up to 2 steps diagonally ( ↖ , ↗ , ↙ , ↘ )

Hero3 (H3): Moves up to 3 steps in any direction ( (Horse move) 2 step Frist move & 1 Step second move)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                  **Home Page to choose option for players**
![image](https://github.com/user-attachments/assets/6b510544-57cd-46d1-a425-7fdf4960b68a)

                     **Two Player View**
![image](https://github.com/user-attachments/assets/39b1afc9-285f-4c25-afe6-ba12ef682ade)

                     **Playing of HP (PAWN)**
![image](https://github.com/user-attachments/assets/3f8bb667-9bbd-40fe-b5ac-2df41bd7adb6)

                     **Playing of H1 **
![image](https://github.com/user-attachments/assets/7df461ae-1c7b-44f5-bd6f-02ba5bfa89ab) 

                         **After performing back(B)**
![image](https://github.com/user-attachments/assets/05f4d8d0-c6e2-4702-813a-383817a3ca64)



                     **Playing of H2 **
![image](https://github.com/user-attachments/assets/30a32d31-79e4-4a14-967f-f9f5522c7025) 

                         **After performing front right (FR)**
![image](https://github.com/user-attachments/assets/6a5f2045-54af-4284-9183-d77bbb3c55c2)


                                    **Playing of H3 **
![image](https://github.com/user-attachments/assets/c828bfba-119a-41d2-aaf5-4563b27a4c50)

                         **After performing front right in H3 (the horse move)**
![image](https://github.com/user-attachments/assets/2b7a6738-7e85-4112-bdea-f0bbada15230)

                       **Move History**
![image](https://github.com/user-attachments/assets/10cf7f8a-3a29-4d1a-abcf-0287a3af33f2)


                          **Game Over **
![image](https://github.com/user-attachments/assets/218ae668-dd15-425e-a7be-bbfd3ecdaf29)


