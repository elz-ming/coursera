var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension.");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary.");
} else if (age < 18) {
    console.log("You get an allowance.");
} else {
    console.log("The value of the age")
}

var day = "Sunday";
switch (day) {
    case "Monday":
        console.log("Do A");
        break;

    case "Tuesday":
        console.log("Do B");
        break;

    case "Wednesday":
        console.log("Do C");
        break;

    case "Thursday":
        console.log("Do D");
        break;

    case "Friday":
        console.log("Do E");
        break;

    case "Saturday":
        console.log("Do F");
        break;

    case "Sunday":
        console.log("Do G");
        break;

    default:
        console.log("There is no such day.");
        break;
}