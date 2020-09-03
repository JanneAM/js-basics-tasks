/**On this task we can research how we can loop through strings with javascript and how we can modify the string with loops
 * charAt() is a method in which you can use for returning character from certain position of a string. More reference in https://www.w3schools.com/JSREF/jsref_charat.asp
 *
 * You can also use charAt() to change the character in current position
 
 
 
 * Task1: change function "changeString" so that you will print only every other character of the defined string (eg. abcdefgh you will print aceg)

 *Task2: change the function so that it will print mirrored string (eg. abcd should be printed dcba)
 */

/**This row defines html element button with ID "click-me" so we can use it later in script */
var clickMe = document.getElementById("click-me");

/**When user clicks click me button script is being run and you can see changes made in to the string*/
clickMe.onclick = function () {
  changeString();
};

/**Function for changing string. This will be excecuted when button is clicked*/
function changeString() {
  /**This row gets the value from text field which has ID "text-input". */
  var string = document.getElementById("text-input").value;

  /**
   * Create another string to store outcome of the function (if we change the original string it wont work properly)
   */
  var modifiedString = "";

  /**Loop through the string. Start from character 0 (i=0;), loop until you reach the value same as string length (i<=string.length), on each increment add 1 to i (i++) */
  for (i = 0; i <= string.length; i++) {
    /**On every increment add to modifiedString a character that is in the string position i. (eg. string = abcd, charAt(1) will be "b" because counting starts from 0) */
    modifiedString += string.charAt(i);
  }
  console.log(modifiedString);
}

/**Extra tips:
 * only changes you need to do are in thhe changeString function. If you are going to change some other part of the code you are not going in to correct direction
 *
 * A lot of the logic here works like in first task. Mirroring string is like counting backwards.
 */
