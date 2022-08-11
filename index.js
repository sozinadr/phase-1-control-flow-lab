function scuberGreetingForFeet() {
    // Write your code here!
    function scuberGreetingForFeet(someValue) {
        if (someValue <= 400) {
            return "This one is on me!";
        } else if (someValue > 2000 && someValue <= 2500) {
            return "I will gladly take your thirty bucks.";
        } else if (someValue > 2500) {
            return "No can do.";
        }
    }
}

function ternaryCheckCity() {
    // Write your code here!
    function ternaryCheckCity(city) {
        return city === "NYC" ? "Ok, sounds good." : "No go.";
    }
}

function switchOnCharmFromTip() {
    // Write your code here!
    function switchOnCharmFromTip(tip) {
        switch (tip) {
            case (tip = "generous"):
                return "Thank you so much.";
                break;
            case (tip = "not as generous"):
                return "Thank you.";
                break;
            default:
                return "Bye.";
        }
    }
}