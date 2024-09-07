const quizDataSimple = [
    {
        id: 0,
        src: "./images/simpleImages/01.jpg",
        correct: 0,
        explanation: "Probably a species of Mycena, the white gills, lack of nipple and brittle stipe give these away."
    },
    {
        id: 1,
        src: "./images/simpleImages/02.jpg",
        correct: 1,
        explanation: "The dark brown cap color shows these have had wet conditions."
    },
    {
        id: 2,
        src: "./images/simpleImages/03.jpg",
        correct: 1,
        explanation: "The nipple on these wet specimens is swollen, making them somewhat special."
    },
    {
        id: 3,
        src: "./images/simpleImages/04.jpg",
        correct: 0,
        explanation: "Looks like a species of Panaeolus, lots of traits are off here (color, shape, nipple etc.). Notice where they are lying, a forrest floor, typically not the place to find libs."
    },
    {
        id: 4,
        src: "./images/simpleImages/05.jpg",
        correct: 1,
        explanation: "A nice little catch, classically looking libs."
    },
    {
        id: 5,
        src: "./images/simpleImages/06.jpg",
        correct: 0,
        explanation: "Probably a species of Mycena, notice the gills are white on these."
    },
    {
        id: 6,
        src: "./images/simpleImages/07.jpg",
        correct: 1,
        explanation: "Beauties like these should not be left behind."
    },
    {
        id: 7,
        src: "./images/simpleImages/08.jpg",
        correct: 0,
        explanation: "Panaeolus of some kind. These are too dark, almost black. The stipe especially should not be so dark."
    },
    {
        id: 8,
        src: "./images/simpleImages/09.jpg",
        correct: 0,
        explanation: "These could be Galerina, Conocybe or Mycena, much too yellow and brittle."
    },
    {
        id: 9,
        src: "./images/simpleImages/10.jpg",
        correct: 0,
        explanation: "Probably at least two species here, colors are way off on both cap and stem. Probably Galerina/Conocybe/Mycena."
    },
    {
        id: 10,
        src: "./images/simpleImages/11.jpg",
        correct: 0,
        explanation: "Maybe Panaeolus. The shape of the cap and lack of nipple give these away."
    },
    {
        id: 11,
        src: "./images/simpleImages/12.jpg",
        correct: 1,
        explanation: "A nice catch of some classic libs. Don't leave such beauties standing."
    },
    {
        id: 12,
        src: "./images/simpleImages/13.jpg",
        correct: 0,
        explanation: "Panaeolus species. Notice the stipe is too dark and the cap shape is too round, also no nipple on these."
    },
    {
        id: 13,
        src: "./images/simpleImages/14.jpg",
        correct: 0,
        explanation: "The color of both the stipe and gills are off on all of them. Probably several species of Mycena/Galerina/Conocybe or similar."
    },
    {
        id: 14,
        src: "./images/simpleImages/15.jpg",
        correct: 0,
        explanation: "Much too yellow/orange in color both on cap, gills and stipe. Also no nipple. Probably something like Conocybe/Galerina."
    },
    {
        id: 15,
        src: "./images/simpleImages/16.jpg",
        correct: 1,
        explanation: "The milky white caps shows these have had dry conditions. Notice the distinct bell shape and nipples."
    },
    {
        id: 16,
        src: "./images/simpleImages/17.jpg",
        correct: 1,
        explanation: "Clear nipples and bell shape, and the stripes on the edge of caps shows we are dealing with the right kind here."
    },
    {
        id: 17,
        src: "./images/simpleImages/18.jpg",
        correct: 1,
        explanation: "Notice the swollen nipple and the stripes on the cap, this indicates wet conditions. The darker edge of the cap and the pale brown stipe are good signs."
    },
    {
        id: 18,
        src: "./images/simpleImages/19.jpg",
        correct: 1,
        explanation: "These are lovely curled specimens, notice the nipples, the dark cap edge, and the white stipes with an almost purple/blueish glow. Looking magical indeed."
    },
    {
        id: 19,
        src: "./images/simpleImages/20.jpg",
        correct: 1,
        explanation: "Stipe is light colored and fibrous. Cap is bell shaped, has a nipple and a darker edge."
    }
];


const quizDataAdvanced = [
    {
        id: 0,
        src: "./images/advancedImages/01.jpg",
        correct: 1,
        explanation: "The cap is unusually yellow, but cap shape and nipple is good, also a white curled stipe."
    },
    {
        id: 1,
        src: "./images/advancedImages/02.jpg",
        correct: 1,
        explanation: "A nice cluster you should not leave behind."
    },
    {
        id: 2,
        src: "./images/advancedImages/03.jpg",
        correct: 1,
        explanation: "This is very white in color, which makes it unusual. It has a nipple, bell shaped cap, white bended stipe. Albino lib."
    },
    {
        id: 3,
        src: "./images/advancedImages/04.jpg",
        correct: 1,
        explanation: "These are just unusually large specimens, with unusually thick and short stipes. Notice the blueish color on the stipes."
    },
    {
        id: 4,
        src: "./images/advancedImages/05.jpg",
        correct: 1,
        explanation: "Short stipes, possibly a little dried, not much nipple. None the less undoubtedly libs."
    },
    {
        id: 5,
        src: "./images/advancedImages/06.jpg",
        correct: 1,
        explanation: "Clear nipple, strangely round cap shape, stipe seems to be stained by its own spores. Still it's a good one."
    },
    {
        id: 6,
        src: "./images/advancedImages/07.jpg",
        correct: 1,
        explanation: "Unusually straight and dark stipe (possibly shaded), and the cap is very open. Otherwise it matches what we want, even has a clear nipple."
    },
    {
        id: 7,
        src: "./images/advancedImages/08.jpg",
        correct: 1,
        explanation: "No nipples (very swollen due to wet conditions) but these are undoubtedly libs."
    },
    {
        id: 8,
        src: "./images/advancedImages/09.jpg",
        correct: 0,
        explanation: "Protostropharia semiglobata is probably the species for these. They are very slimy and too big to be libs."
    },
    {
        id: 9,
        src: "./images/advancedImages/10.jpg",
        correct: 1,
        explanation: "Younger specimens but still libs."
    },
    {
        id: 10,
        src: "./images/advancedImages/11.jpg",
        correct: 1,
        explanation: "A nice big one. Notice the unusually light cap color."
    },
    {
        id: 11,
        src: "./images/advancedImages/12.jpg",
        correct: 0,
        explanation: "Classic Panaeolus. Notice the white on the edge of the caps, not something you see on libs."
    },
    {
        id: 12,
        src: "./images/advancedImages/13.jpg",
        correct: 1,
        explanation: "Big specimens with open/broad cap."
    },
    {
        id: 13,
        src: "./images/advancedImages/14.jpg",
        correct: 0,
        explanation: "This one seems to have a kind of growth failure on top, appearing like a huge nipple. Notice the non-fibrous stipe."
    },
    {
        id: 14,
        src: "./images/advancedImages/15.jpg",
        correct: 0,
        explanation: "Group of big Panaeolus specimens."
    },
    {
        id: 15,
        src: "./images/advancedImages/16.jpg",
        correct: 0,
        explanation: "Probably both Mycena and Panaeolus on this photo. Mycena have white gills and Panaeolus have no nipples and not a bell shaped cap."
    },
    {
        id: 16,
        src: "./images/advancedImages/17.jpg",
        correct: 0,
        explanation: "Protostropharia semiglobata is probably the species for these. They are very slimy."
    },
    {
        id: 17,
        src: "./images/advancedImages/18.jpg",
        correct: 0,
        explanation: "Small Panaeolus, and perhaps there are two species present on this photo."
    },
    {
        id: 18,
        src: "./images/advancedImages/19.jpg",
        correct: 1,
        explanation: "Cluster of libs, some are older specimens, very open/broad caps."
    },
    {
        id: 19,
        src: "./images/advancedImages/20.jpg",
        correct: 0,
        explanation: "Panaeolus"
    }
];


const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
};

shuffleArray(quizDataSimple);
shuffleArray(quizDataAdvanced);



const nextQbtn = document.getElementById("btn");
const imgElem = document.getElementById("img");
const quizForm = document.getElementById("quiz-form");
const result = document.getElementById("result");
const qCounter = document.getElementById("question-counter");
const levelShow = document.getElementById("level-show");
const qAmount = document.getElementById("question-amount");

qAmount.innerText = quizDataSimple.length + quizDataAdvanced.length;
levelShow.innerText = "Simple level";

let advanced = false;

let counter = 1;
let currentImageSimple = 0;
let currentImageAdvanced = 0;
let img = new Image();
img.src = quizDataSimple[currentImageSimple].src;
img.classList.add("d-block", "img-fluid");
img.style.maxHeight = "500px";
imgElem.appendChild(img);

const resultImgContainer = document.createElement("div");
resultImgContainer.classList.add("py-3");
const pResults = document.createElement("p");
pResults.classList.add("mt-2", "lead");

let scoreSimple = 0;
let scoreAdvanced = 0;
let wrongAnswersSimple;
let wrongAnswersAdvanced;

const imageCache = [];
function preloadImage(url) {
    let nimg = new Image();
    nimg.src = url;
    imageCache.push(nimg);
}

preloadImage(quizDataSimple[currentImageSimple+1].src);


function showResults() {
    quizForm.classList.add("d-none", "invisible");
    result.innerHTML += `<p class=\"pt-3\">You gave the correct answer to <strong>${Math.round(1000*scoreSimple/quizDataSimple.length)/10}%</strong> of the simple level questions (${scoreSimple}/${quizDataSimple.length}).</p>`;
    result.innerHTML += `<p>You gave the correct answer to <strong>${Math.round(1000*scoreAdvanced/quizDataAdvanced.length)/10}%</strong> of the advanced level questions (${scoreAdvanced}/${quizDataAdvanced.length}).</p>`;
    result.innerHTML += `<p>Your total score is <strong>${Math.round(1000*(scoreSimple + scoreAdvanced)/(quizDataSimple.length + quizDataAdvanced.length))/10}%</strong> of all the questions (${scoreSimple + scoreAdvanced}/${quizDataSimple.length + quizDataAdvanced.length}).</p>`;
    if (wrongAnswersSimple.length || wrongAnswersAdvanced.length) {
        result.innerHTML += "<p class=\"pt-5\">Check these pictures again (<span class=\"text-success fw-bold\">green</span> = libs, <span class=\"text-danger fw-bold\">red</span> = not libs):</p>";
    }
    if (wrongAnswersSimple.length) {
        const filtrQuizDataSimple = quizDataSimple.filter((obj) => wrongAnswersSimple.includes(obj.id));
        result.innerHTML += "<h5 class=\"pt-5\">Simple level errors</h5>"
        filtrQuizDataSimple.forEach((question) => {
            let container = resultImgContainer.cloneNode();
            let p = pResults.cloneNode();
            let i = img.cloneNode();
            i.src = question.src;
            question.correct ? i.classList.add("border-green") : i.classList.add("border-red");
            p.innerText = question.explanation
            container.appendChild(i);
            container.appendChild(p)
            result.appendChild(container);
        });
    }
    if (wrongAnswersAdvanced.length) {
        const filtrQuizDataAdvanced = quizDataAdvanced.filter((obj) => wrongAnswersAdvanced.includes(obj.id));
        result.innerHTML += "<h5 class=\"pt-5\">Advanced level errors</h5>"
        filtrQuizDataAdvanced.forEach((question) => {
            let container = resultImgContainer.cloneNode();
            let p = pResults.cloneNode();
            let i = img.cloneNode();
            i.src = question.src;
            question.correct ? i.classList.add("border-green") : i.classList.add("border-red");
            p.innerText = question.explanation
            container.appendChild(i);
            container.appendChild(p)
            result.appendChild(container);
        });
    }
    result.classList.remove("invisible");
}

let currentImage = 0;
let score = 0;
let wrongAnswers = [];

function quiz(quizData) {
    let answer = document.querySelector('input[name="answer"]:checked')?.value;
    
    if (answer) {
        quizData[currentImage].correct === ~~answer ? score++ : wrongAnswers.push(quizData[currentImage].id);
        if (currentImage < quizData.length-1) {
            img.src = quizData[currentImage+1].src;

            if (currentImage < quizData.length - 2) {
                preloadImage(quizData[currentImage+2].src);
            }
            currentImage++;
        } else {
            if (advanced) {
                scoreAdvanced = score;
                wrongAnswersAdvanced = wrongAnswers;
                showResults();
            } else {
                scoreSimple = score;
                wrongAnswersSimple = wrongAnswers;
                nextLevel();
            }
        }
        document.querySelector('input[name="answer"]:checked').checked = false;
        qCounter.innerText = ++counter;
    }
}

function nextLevel() {
    levelShow.innerText = "Advanced level";
    img.src = quizDataAdvanced[currentImageAdvanced].src;
    preloadImage(quizDataAdvanced[currentImageAdvanced+1].src);
    advanced = true;
    currentImage = 0;
    score = 0;
    wrongAnswers = [];
}


nextQbtn.addEventListener("click", () => {
    if (advanced) {
        quiz(quizDataAdvanced);
    } else {
        quiz(quizDataSimple);
    }
});