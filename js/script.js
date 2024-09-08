/* Mixitup Filter for Portfolio */
document.addEventListener('DOMContentLoaded', function () {
    var mixerPortfolio = mixitup('.work-container', {
        selectors: {
            target: '.work-card'
        },
        animation: {
            duration: 300
        }
    });
});

/* Link Active Work */
const linkWork = document.querySelectorAll('.work-item')

function activeWork() {
    linkWork.forEach(e => e.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(e => e.addEventListener("click", activeWork))

/* Work Popup */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work-button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open")
}

document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
    document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
    document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

/* Typing Animation */
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.typing-home')) {
        new Typed(".typing-home", {
            strings: ["Frontend Developer", "Software Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if (document.querySelector('.typing-about')) {
        new Typed(".typing-about", {
            strings: ["Frontend Developer", "Software Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }
});



/* Aside */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for (let j = 0; j < totalSection; j++) {
        allSection[j].classList.remove("back-section")
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split('#')[1];
    document.querySelector("#" + target).classList.add("active")
}

/* Hire Me Button */
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split('#')[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active")
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex)
})

/* Nav Toggler */
const navnavTooglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navnavTooglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navnavTooglerBtn.classList.toggle("open")
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* Contact Form to Spreadsheet */
const scriptURL = 'https://script.google.com/macros/s/AKfycbzu7QfH6VfKqPNFR2LdfcFO4LapDF9IFQjPCZ_Q_D6IP2-taBR5X1xbkNQAP0lTI-cAPA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

/* Successful Message */
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const successMessage = document.querySelector('.successful');
    successMessage.style.display = 'block';
    const form = event.target;
    form.reset();
    setTimeout(function () {
        successMessage.style.display = 'none';
    }, 3000);
});
