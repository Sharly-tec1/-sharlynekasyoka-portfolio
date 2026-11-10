
/* ===========================
   Typing Animation
=========================== */

const typing = document.querySelector(".typing");

if (typing) {

    const words = [
        "Software Engineer",
        "Web Developer",
        "Computer Science Student",
        "Problem Solver",
        "UI/UX Designer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent = currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 120);
    }

    typeEffect();
}


/* ===========================
   Smooth Scroll
=========================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* ===========================
   Navbar Shadow
=========================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (header) {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 5px 25px rgba(0,0,0,.4)";

        } else {

            header.style.boxShadow = "none";

        }
    }

});


/* ===========================
   Scroll to Top
=========================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.pageYOffset > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
