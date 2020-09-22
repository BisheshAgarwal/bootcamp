const previous = () => {
    document.querySelector(".user__name").innerHTML = "Tanya Sinclair";
    document.querySelector(".user__job").innerHTML = "UX Engineer";
    document.querySelector("p").innerHTML = " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
    document.querySelector("img").src = "images/image-tanya.jpg";
}

const next = () => {
    document.querySelector(".user__name").innerHTML = "John Tarkpor";
    document.querySelector(".user__job").innerHTML = "Junior Front-end Developer";
    document.querySelector("p").innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
    document.querySelector("img").src = "images/image-john.jpg";
}

document.querySelector(".prev").addEventListener("click", previous);

document.addEventListener("keydown", (event) => {
    if(event.keyCode === 37) {
        previous();
    }
    else if(event.keyCode === 39) {
        next();
    }
});

document.querySelector(".next").addEventListener("click", next);
