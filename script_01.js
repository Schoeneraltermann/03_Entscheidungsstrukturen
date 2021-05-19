// Entscheidungsstrukturen | control structures

// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 35;
ageMark = 30;

//Logische Aussagen/ Test(s)
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
//console.log("isJohnOlder: " + isJohnOlder);
//console.log("isJohnEqual: " + isJohnEqual);

/************ IF  ************/
// alternativlos (TINA)
// entweder JA oder nix ...

/*
//if (true)
if (isJohnOlder)
//if (ageJohn > ageMark)
//if (35 > 30)
{
    console.log("John ist älter");
}
*/

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

if (isJohnOlder)
{
    // Ja-Zweig / true
    console.log("John ist älter");
}
else
{
    // Nein-Zweig / false
    console.log("John ist jünger");
}