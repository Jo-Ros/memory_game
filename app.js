// 
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

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

// Randomize
const randomize = () => {
    const cardData = getData();  
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}
randomize();

// Card Generator
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

// Check Cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    console.log(clickedCard);
}


cardGenerator();