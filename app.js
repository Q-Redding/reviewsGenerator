const reviews = [
    {
            id: 1,
            name: "Alexia Lui",
            img:"./img/profile-1.jpg",
            text: "The  movie was amazing. It had me on my feet the whole time I was on the edge of my seat. I really hope we can get another film from Akira Night soon!",
    },
    {
            id: 2,
            name: "Jason Lukewell",
            img:"./img/profile-2.jpg",
            text: "Top 10 film of the decade! Oscars nominations need to be coming in now!",
    },
    {
            id: 3,
            name: "Brad Wilson",
            img:"./img/profile-3.jpg",
            text: "The movie was alright it could've been better if it had less CGI and went back to the old school way of filming.",
    },
    {
            id: 4,
            name: "Blake Johnson",
            img:"./img/profile-4.jpg",
            text: "Real Horror is Back! I know the limited series is going to be amazing.",
    },
    {
            id: 5,
            name: "CatLady_333",
            img:"./img/profile-5.jpg",
            text: "This is an impressive debut for an director has a bright future in the industry.",
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);

})

const showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

//randomBtn 
randomBtn.addEventListener("click", function () {
   currentItem = Math.floor(Math.random() * reviews.length);
   console.log(currentItem);
   showPerson(currentItem);
})