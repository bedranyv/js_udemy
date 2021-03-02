/* Maze Runner
Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. 
Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. 
If you reach the end point before all your moves have gone, you should return Finish. 
If you hit any walls or go outside the maze border, you should return Dead. 
If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ['N','N','N','N','N','E','E','E','E','E'] == 'Finish'
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
2. The start and finish positions will change for the final tests.
3. The directions array will always be in upper case and will be in the format of N = North, 
E = East, W = West and S = South.
4. If you reach the end point before all your moves have gone, you should return Finish.
5. If you hit any walls or go outside the maze border, you should return Dead.
6. If you find yourself still in the maze after using all the moves, you should return Lost.

Вступление
Добро пожаловать, искатель приключений. Ваша цель - пройти по лабиринту и добраться до финиша, не касаясь стен. 
Это мгновенно убьет вас!
Задача
Вам будет предоставлен 2D-массив лабиринта и массив направлений. Ваша задача - следовать данным указаниям. 
Если вы дойдете до конечной точки до того, как закончились все ваши ходы, вы должны вернуть Finish. 
Если вы натолкнетесь на стены или выйдете за границу лабиринта, вы должны вернуть Dead. 
Если вы все еще находитесь в лабиринте после использования всех ходов, вы должны вернуть Lost.
Массив лабиринта будет выглядеть как

лабиринт = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..с помощью следующего ключа

      0 = безопасное место для прогулок
      1 = стена
      2 = Начальная точка
      3 = точка финиша
  direction = [«N», «N», «N», «N», «N», «E», «E», «E», «E», «E»] == «Готово»
Правила
1. Массив лабиринта всегда будет квадратным, т.е. N x N, но его размер и содержание будут меняться от теста к тесту.

2. Позиции старта и финиша изменятся для финальных тестов.

3. Массив направлений всегда будет в верхнем регистре и будет иметь формат N = север, E = восток, W = запад и S = ​​юг.

4. Если вы дойдете до конечной точки до того, как все ваши ходы закончились, вы должны вернуть Finish.

5. Если вы натолкнетесь на какие-либо стены или выйдете за границу лабиринта, вы должны вернуть Dead.

6. Если вы все еще находитесь в лабиринте после использования всех ходов, вы должны вернуть Lost.

Sample Tests:
var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
            
Test.assertEquals(mazeRunner(maze,['N','N','N','N','N','E','E','E','E','E']), 'Finish', 'Expected Finish');
Test.assertEquals(mazeRunner(maze,['N','N','N','N','N','E','E','S','S','E','E','N','N','E']), 'Finish', 'Expected Finish');
Test.assertEquals(mazeRunner(maze,['N','N','N','N','N','E','E','E','E','E','W','W']), 'Finish', 'Expected Finish');

Test.assertEquals(mazeRunner(maze,['N','N','N','W','W']), 'Dead', 'Expected Dead');
Test.assertEquals(mazeRunner(maze,['N','N','N','N','N','E','E','S','S','S','S','S','S']), 'Dead', 'Expected Dead');

Test.assertEquals(mazeRunner(maze,['N','E','E','E','E']), 'Lost', 'Expected Lost');


*/

function mazeRunner(maze, directions) {
    if (maze.length == 0 || directions.length == 0) {
        return 'Dead';
    }

    if (!maze || !directions) {
        return 'Dead';
    }

    let switchFind = false,
        finish = false,
        curX,
        curY,
        border = maze.length;
    for (curY = 0; curY < maze.length; curY++) {
        for (curX = 0; curX < maze[curY].length; curX++) {
            if (maze[curY][curX] == 2) {
                switchFind = true;
                break;
            }
        }
        if (switchFind) {
            break;
        }
    }

    for (let i = 0; i < directions.length; i++) {
        if (directions[i] == 'N') {
            curY--;
        }
        if (directions[i] == 'S') {
            curY++;
        }
        if (directions[i] == 'E') {
            curX++;
        }
        if (directions[i] == 'W') {
            curX--;
        }

        if (curY < 0 || curX < 0 || curY >= border || curX >= border || maze[curY][curX] == 1) {
            return 'Dead';
        }

        if (maze[curY][curX] == 3) {
            return 'Finish';
        }
    }
    return 'Lost';
}


let maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,37,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

            
console.log(mazeRunner(maze,['N','N','N','N','N','E','E','E','E','E']));
console.log(mazeRunner(maze,['N','N','N','N','N','E','E','S','S','E','E','N','N','E']));
console.log(mazeRunner(maze,['N','N','N','N','N','E','E','E','E','E','W','W']));
console.log(mazeRunner(maze,['N','N','N','W','W']));
console.log(mazeRunner(maze,['N','N','N','N','N','E','E','S','S','S','S','S','S']));
console.log(mazeRunner(maze,['N','E','E','E','E']));