const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//IMAGES HEADER LOGO
let headerLogo = document.getElementById("cta-img");
headerLogo.setAttribute('src', siteContent["cta"]["img-src"]);
//MIDDLE IMAGE
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//NAV
const anchorItems = document.querySelectorAll('a');

const anchText = document.querySelectorAll("nav a");
for (let i = 0; i < anchText.length; i++) {
  anchText[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  anchText[i].style.color = "crimson";
}


//HEADER TEXT
const cta = document.querySelector('.cta-text h1');
cta.textContent = siteContent["cta"]["h1"];


//BUTTON
const btn = document.querySelector("button");
btn.textContent = siteContent["cta"]["button"];


//TOP CONTENT
//FIRST H4
const topContent = document.querySelector('.text-content h4');
topContent.textContent = siteContent["main-content"]["features-h4"];
//FIRST P TAG
// const topContent = document.querySelector('.text-content p');
// topContent.textContent = siteContent["main-content"]["features-content"];


//CONTACT 
const contactInfo = document.querySelector(".contact");
contactInfo.textContent = siteContent["contact"]["contact-h4"];


//FOOTER
const footerInfo = document.querySelector("footer p");
footerInfo.textContent = siteContent["footer"]["copyright"];

//try this out maybe
// let h4weird = document.querySelectorAll("h4:nth-child(1)")

//working with event listeners
// Click Event Listner
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
  event.target.style.backgroundColor = 'deepskyblue';
  //used .target to change to red 
});