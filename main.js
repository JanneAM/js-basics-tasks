/**In this task let's use our code from task2 and create a checker if a word is a palindrome or not.
 * (Palindrome is a word which is same backwards. For example "saippuakauppias" can be read from left or right and it's allways the same)
 *
 * In this task you need to use some logical operators for comparing two different strings. More reference in https://www.w3schools.com/js/js_comparisons.asp
 *
 * You will also use if else - statement to set the output of the palindrome check. https://www.w3schools.com/js/js_if_else.asp
 *
 *In order to figure out if a word is a palindrome you need to compare two different strings. First is the original given string and second is the same string reversed. If these strings match eachother then you have a palindrome.
 *
 * When you set the output you need to form following logic:
 * If it is a palindrome then set value "It's a palindrome"
 * Else set value "It is not a palindrome"
 *
 */

/**Extra tips:
 * Change only code in "If()"" in order to get the code work as supposed.
 */

var clickMe = document.getElementById("click-me");

/**We need this input for a placeholder for our result. In this input we will tell if the word was a palindrome or not */
var result = document.getElementById("result");

/**When user clicks click me button script is being run and you can see changes made in to the string*/
clickMe.onclick = function () {
  checkPalindrome();
};

/**Function for checking if the word is a palindrome. This will be excecuted when button is clicked*/
function checkPalindrome() {
  /**This row gets the value from text field which has ID "text-input". */
  var string = document.getElementById("text-input").value;

  /**
   * Create another string to store outcome of the function (if we change the original string it wont work properly)
   */
  var reversedString = "";

  /**As in the task2 you will reverse the string with a loop. I have the loop here ready so you don't have to reinvent it. */
  for (i = string.length; i >= 0; i--) {
    reversedString += string.charAt(i);
  }
  /**Between brackets of if() I need you to set the condition what you want to meet in order to run the code between {}
   */
  if (string) {
    /**Put your result statement here ("It is a palindrome"). For help check what is inside else */
  } else {
    /**else is part of if and does not need () or condition because it is run if the condition of if() is not met. */
    result.setAttribute("value", "It is not a palindrome!");
  }
}
