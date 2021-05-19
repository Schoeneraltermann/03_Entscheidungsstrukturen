// Entscheidungsstrukturen | control structures

// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 40;
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

/*
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
*/

/************ IF - ELSE IF  ************/
// mit Alternativen Fällen (älter,jünger,gleich alt)

if (isJohnOlder) // ageJohn > ageMark
{
    // Ja-Zweig / true
    console.log("John ist älter");
}
// 1. Alternative
else if (isJohnEqual) // ageJohn == ageMark
{
    // 1. Alternative / false
    console.log("John ist gleich alt");
}
// ggf. weiter Alternativen
// else if (...)
else
{
    // letze Alternative / false
    console.log("John ist jünger");
}

