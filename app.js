// 
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

playerLivesCount.textContent = playerLives;

// Generate Data
const getData = () => [
    { imgSrc: "./images/soilandpimpsession.jpg", name: "soiland"},
    { imgSrc: "./images/lonniesmith.jpg", name: "drlonnie"},
    { imgSrc: "./images/maalouf.jpg", name: "maalouf"},
    { imgSrc: "./images/glasper.webp", name: "glasper"},
    { imgSrc: "./images/evans.jpg", name: "evans"},
    { imgSrc: "./images/coryhenry.jpg", name: "cory"},
    { imgSrc: "./images/coltrane.webp", name: "coltrane"},
    { imgSrc: "./images/baker.jpg", name: "baker"},

    { imgSrc: "./images/soilandpimpsession.jpg", name: "soiland"},
    { imgSrc: "./images/lonniesmith.jpg", name: "drlonnie"},
    { imgSrc: "./images/maalouf.jpg", name: "maalouf"},
    { imgSrc: "./images/glasper.webp", name: "glasper"},
    { imgSrc: "./images/evans.jpg", name: "evans"},
    { imgSrc: "./images/coryhenry.jpg", name: "cory"},
    { imgSrc: "./images/coltrane.webp", name: "coltrane"},
    { imgSrc: "./images/baker.jpg", name: "baker"},
];

// Randomize =========================================
const randomize = () => {
    const cardData = getData();  
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

// Card Generator =========================================
const cardGenerator = () => {
    const cardData = randomize();

    cardData.forEach(item => {
        // Generate HTML
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');

        card.classList.add('card');
        face.classList.add('face');
        back.classList.add('back');
        // Attach info to the card
        face.src = item.imgSrc;
        card.setAttribute('cardName', item.name);

        section.append(card);
        card.append(face, back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
    });
};

// Check Cards =========================================
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');


    //logic
    if(flippedCards.length === 2) {
        
        if(flippedCards[0].getAttribute("cardName") === flippedCards[1].getAttribute("cardName")) {

            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })

        } else {

            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1500);
            })

            playerLives --;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) {
                restart("You Lose ... :( \nTryAgain ;)");
            }
        }
    }

    if(toggleCard.length === 16) {
        restart('You Won! :D \n Want to play again?');
    }
}

// Restart =========================================
const restart = (text) => {
    cardData = randomize();
    const cards = document.querySelectorAll('.card');
    const faces = document.querySelectorAll('.face');
    section.style.pointerEvents = 'none';

    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        //randomize ans delay
        setTimeout(() => {
            section.style.pointerEvents = 'all';
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('cardName', item.name);
        }, 1500)
    })

    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100)
}


cardGenerator();