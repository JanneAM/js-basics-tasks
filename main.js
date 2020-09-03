/**
 * This is basic "for" loop. With foor loop you can execute repetitive actions.
 * It is declared with word for and adding brackets after.
 * Inside the brackets you declare:
 *  -what is the value where you want to start. In example it is "i=0"
 *  -until what value will the loop continue. In example "i<10"
 *  -how much you want to add to the value on each iteration. In example "i++"
 * For more reference about for loop check https://www.w3schools.com/js/js_loop_for.asp
 * */

/**
 * You don't have to declare this variable outside loop.
 * It is enough when you declare inside loops condition "i=0"
 * You can test it by deleting "var i;"" row.
 * */

/**
 *Task1: Change the loop so that it will log numbers between 1-10 (at the moment it logs 1-9)
 *Task2: Change the loop so that it logs every other number until it reaches number then (eg. 0,2,4,6,8,10)
 *Task3: Change the loop so that it logs numbers from 10-1
 */

/**Extra tips:
 * i++ equals to i+=1 more info at https://www.w3schools.com/Js/js_operators.asp
 * To reach number 10 with loop you must set condition "is less than or equals to" more info https://www.w3schools.com/js/js_comparisons.asp
 * REMEMBER! If you set conditions that can be never met the loop will be infinite and will most likely crash your browser.
 */

var i;

for (i = 1; i < 10; i += 2) {
  console.log(i);
}
