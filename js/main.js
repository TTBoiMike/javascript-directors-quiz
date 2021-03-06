let form = document.querySelector("form"); 
let correctAnswers = ["fightclub", "thematrix", "starwars", "scarface", "planetoftheapes", "jarhead"];
let containers = document.querySelectorAll(".question-container");

form.addEventListener("submit", e  => {
    // create score variable to track score
    let score = 0;

    // stops window reloading when user clicks submit - uses 'event' object
    e.preventDefault();

    
    // create variable of user inputs (.value)
    const userAnswers = [form.spielberg.value, form.nolan.value, form.jackson.value, form.scorsesee.value, form.kubrick.value, form.bigelow.value] 
    console.log(userAnswers);
    
    // compare user inputs with correctAnswers array
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            containers[index].style.border = "10px solid green"
            score += 1;
        } else {
            containers[index].style.border = "10px solid red"
        }
    });
    // log final score
    console.log(score)

    // display score on screen
    let result = document.querySelector(".user-score");
    result.innerHTML = score;
})

// show director help function
function showDirector(qmark, directorTag) {
    directorTag.style.display = "block";
    setTimeout(function() {
        directorTag.style.display = "none";
        qmark.style.display = "none";
    }, 2000)
}



// add function to highlight which question was wrong