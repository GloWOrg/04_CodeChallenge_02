/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */
const cond = true; //um eine Wahrheitsprüfung durchzuführen muss eine cond - Condition = TRUE genutzt werden
 let firstName, lastName, alter;

firstName   = prompt("Bitte geben Sie Ihren Vornamen ein");
lastName    = prompt("Bitte geben Sie Ihren Nachnamen ein");
alter       = parseInt(prompt("Bitte geben Sie Ihr Alter ein")); //umwandlung String in INT (scheint aber auch ohne zu gehen)
// parseInt(alter);

switch (cond) {
    case alter >= 0 && alter < 6 : // UND Operator ist && 
        console.log(firstName + " " + lastName + " " + "trinkt Milch");
        break;
    case alter >= 6 && alter <= 12 :
        console.log(firstName + " " + lastName + " " + "trinkt Saft");
        break;
    case alter >= 13 && alter <= 17:
        console.log(firstName + " " + lastName + " " + "trinkt Cola");
        break;
    case alter >= 18 :
        console.log(firstName + " " + lastName + " " + "trinkt Wein");
        break;
    default:
        console.log(firstName + " " + lastName + " " + "trinkt nichts")
        break;
}