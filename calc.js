const name1 = document.getElementById("text1");
const name2 = document.getElementById("text2");

const avatar1 = document.getElementById("avatar1");
const avatar2 = document.getElementById("avatar2");

const checkBtn = document.getElementById("check");

const result = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
const badge = document.getElementById("badge");

const loader = document.getElementById("loader");
const container = document.querySelector(".container");

const modeBtn = document.getElementById("mode");
name1.addEventListener("input", () => {
    avatar1.textContent =
        name1.value.trim().length > 0
            ? name1.value.trim()[0].toUpperCase()
            : "?";
});

name2.addEventListener("input", () => {
    avatar2.textContent =
        name2.value.trim().length > 0
            ? name2.value.trim()[0].toUpperCase()
            : "?";
});
const badges = [
    "🏆 Meme Masters",
    "🎮 Gaming Partners",
    "🍕 Snack Sharing Experts",
    "🚀 Adventure Crew",
    "📚 Study Survivors",
    "🎵 Playlist Twins",
    "😂 Chaos Creators",
    "☕ Tea Break Legends"
];

function getFriendshipLevel(score) {
    if (score >= 96) return "👑 Legendary Friendship";
    if (score >= 81) return "🔥 Unbreakable duo";
    if (score >= 61) return "🤗 Best Buddies";
    if (score >= 41) return "😎 Good Friends";
    if (score >= 21) return "🤝 Casual Friends";
    return "😅 Barely Know Each Other";
}

function generateScore(a, b) {
    const str = (a + b)
        .toLowerCase()
        .replace(/\s/g, "");

    let total = 0;
    for (let char of str) {
        total += char.charCodeAt(0);
    }
    return (total % 100) + 1;
}

function animateScore(finalScore) {
    let current = 0;
    const interval = setInterval(() => {
        scoreText.textContent = `${current}%`;
        current++;
        if (current > finalScore) {
            clearInterval(interval);
        }
    }, 20);
}

function launchConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        const symbols = [  "🎉", "🎊", "⭐","✨", "🎈"  ];
        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];
        confetti.style.left =
            Math.random() * 100 + "vw";
        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}
function applyTheme(score){
    if(score >= 90){
        container.style.boxShadow = "0 0 40px rgba(255,215,0,0.6)";

    }

    else if(score >= 70){
        container.style.boxShadow = "0 0 35px rgba(34,197,94,0.5)";
    }

    else if(score >= 40){
        container.style.boxShadow = "0 0 35px rgba(59,130,246,0.5)";
    }

    else{
        container.style.boxShadow = "0 0 35px rgba(239,68,68,0.5)";
    }
}

checkBtn.addEventListener("click", () => { //check bonding
    const firstName = name1.value.trim();
    const secondName = name2.value.trim();
    if (!firstName || !secondName) {
        result.innerHTML =
            "⚠️ Please enter both names.";
        return;
    }
    loader.style.display = "block";
    result.innerHTML =
        "🔍 Scanning Friendship Database...";
    badge.innerHTML = "";
    scoreText.textContent = "0%";
    setTimeout(() => {
        loader.style.display = "none";
        const first =
            firstName.toLowerCase();
        const second =
            secondName.toLowerCase();
        let score;

        if (first === second) {   //same name
            score = 100;
            animateScore(score);
            result.innerHTML =
                "😂 You're your own best friend!";
            badge.innerHTML =
                "💖 Self Friendship Master";
            launchConfetti();
            applyTheme(score);
            return;
        }

        if((first === "shreya" &&  second === "saurabh") ||  (first === "saurabh" &&  second === "shreya")) {
            score = 100;
            animateScore(score);
            result.innerHTML = `<br>Shreya 🤝 Saurabh <br>  Greatest bonding`;
            badge.innerHTML =
                "🌟 Friendship Hall of Fame";
            container.classList.add(
                "legendary"
            );
            launchConfetti();
            return;
        }

        /* NORMAL SCORE */
        score =  generateScore(firstName,  secondName);
         animateScore(score);
        const level =
            getFriendshipLevel(score);
        result.innerHTML = ` ${level} <br><br> ${firstName} 🤝 ${secondName}  `;
        badge.innerHTML =
            badges[
                Math.floor(
                    Math.random() *
                    badges.length
                )
            ];
        applyTheme(score);
        if (score >= 80) {
            launchConfetti();
        }
        if (score < 30) {
            container.classList.add(
                "shake"
            );
            setTimeout(() => {  container.classList.remove(
                    "shake"
                ); }, 500);
        }
    }, 2200);
});

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (
        document.body.classList.contains(
            "dark"
        )
    ) {
        modeBtn.innerHTML = "🔆";
    }
    else {  modeBtn.innerHTML = "🌙"; }
});