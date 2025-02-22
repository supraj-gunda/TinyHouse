let pokeCount = 0;

function pokeFrog() {
    // List of possible responses
    const messages = [
        "The frog blinks at you.",
        "The frog croaks loudly!",
        "The frog seems unimpressed.",
        "The frog jumps away slightly.",
        "The frog looks at you... menacingly.",
        "The frog ribbits in confusion.",
        "The frog does nothing.",
        "The frog stares into your soul.",
        "The frog sent a mosquito to your address.",
        "The frog wants to fight.",
        "The frog will spread rumors about you.",
        "The frog has a doctor's appointment.",
        "The frog will not be provoked.",
        "The frog predicts you'll have a good day.",
        "The frog predicts you'll have an excellent day.",
        "The frog is lonely.",
        "The frog reveals its name--Frogbert.",
        "The frog pokes you back.",
        "The frog is watching you.",
        "The frog will now spread rumors about you.",
        "The frog is just a girl.",
        "The frog hops to another lilypad.",
        "The frog judges you.",
        "JQ#*)VN@&(#@)#&nFAbe.",
        "The frog likes fly-filled calzones.",
        "The frog is waiting for Frogalina.",
        "The frog missed the schoolbus this morning.",
        "The frog is tired of your incessant nagging.",
        "The frog eats, undisturbed.",
        "The frog sleeps, undisturbed.",
        "The frog lives, undisturbed.",
        "The frog cannot live, laugh, love with you around.",
        "The frog wishes you good luck.",
        "The frog had a big lunch.",
        "The frog wishes to grow wings and fly.",
        "The frog is a frog.",
        "The frog wonders what is for dinner.",
        "The frog ponders.",
        "The frog contemplates.",
        "The frog sits lifeless.",
        "The frog jumps on your face.",
        "The frog waits for justice.",
        "The frog yearns for freedom.",
        "The frog is actually from the pond over."
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("pokeResponse").textContent = randomMessage;

    pokeCount++;
    let counterElement = document.getElementById("pokeCounter");
    counterElement.textContent = `${pokeCount}`;
}