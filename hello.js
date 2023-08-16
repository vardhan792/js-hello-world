/*  
Welcome, new coder. 
Enter your code on line 7 to print 'Hello, World!' 
to the console (the panel on the right)
*/

console.log('Hello World!');

/*  
Next, PLAY! 
Modify your code on line 7 to try to accomplish the tasks listed below: */

 //  1. Change the message that is printed.
 console.log('this is first node JS Program' );
 /*  2. Figure out what the parentheses do. Will the code work without them?
      Ans : without paratheses program will not work . it will give syntaxError.  */
 //  console.log Hello World!;

  /* 3. Remove one or both quotation marks. Do we need to include both opening and closing quote marks? 
        Is there a difference between using a single or a double quote (' vs. ")? 
        Ans: 
        A. If left quotation mark is removed the error is SyntaxError: missing ) after argument list
        B. If right quotation mark is removed the error is SyntaxError: Invalid or unexpected token
        C. If both quotation marks are removed the error is SyntaxError: missing ) after argument list
        D. printing HelloWorld!(no spaces between words) without quotationmarks the error is SyntaxError: missing ) after argument list
        E. we need the both quotation marks are needed if we are printing the characters. if we are using the numerics quotation marks
           are not required. 
        F. there is no difference between using a single or a double quote  */
  // console.log(Hello World!');
  // console.log('Hello World!);
  // console.log(Hello World!);
  // console.log(HelloWorld!);
  console.log(12345);
  console.log("Hello World!" );
  /* 4. Remove the semi-colon, ;
        Ans: it will give syntax error : SyntaxError: missing ) after argument list */
  //console.log('Hello World!' )
  /* 5. Print a number. (Bonus: Print two numbers added together). */
  console.log(12345);
  console.log(111 + 222);
  /* 6. Print multiple messages one after the other.  */
   console.log("this is the " );
   console.log("first node js" );
   console.log("program" );
 /*  7. Print two messages on the same line. */
   console.log("this is the" ,"first node js program ");
   /* 8. Print a message that contains quote marks, such as Quoth the Raven "Nevermore". */
   console.log("this is the" ,"\"first node js program\" ");
 /*  9. Other. You choose! */
   console.log("the \"sum of two numbers\" 123 and 456 is equals to" , 123 + 456, 'And \"Difference is equals to \" ' , 123 - 456);
