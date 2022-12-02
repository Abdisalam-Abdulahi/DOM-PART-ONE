const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
let services = document.querySelector(".service");
services.textContent = siteContent["nav"]["nav-item-1"];
let product = document.querySelector(".Product");
product.textContent = siteContent["nav"]["nav-item-2"];
let vision = document.querySelector(".Vision");
vision.textContent = siteContent["nav"]["nav-item-3"];
let features = document.querySelector(".Features");
features.textContent = siteContent["nav"]["nav-item-4"];
let about = document.querySelector(".About");
about.textContent = siteContent["nav"]["nav-item-5"];
let contact = document.querySelector(".Contact");
contact.textContent = siteContent["nav"]["nav-item-6"];
let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];
let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];
let codeImg = document.getElementById("cta-img");
codeImg.setAttribute("src", siteContent["cta"]["img-src"]);
let firstH4 = document.getElementById("h4-1");
firstH4.textContent = siteContent["main-content"]["features-h4"];
let featureContent = document.getElementById("featureContent");
featureContent.textContent = siteContent["main-content"]["features-content"];
let secondH4 = document.getElementById("h4-2");
secondH4.textContent = siteContent["main-content"]["about-h4"];
let aboutContent = document.getElementById("aboutContent");
aboutContent.textContent = siteContent["main-content"]["about-content"];
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
let thirdH4 = document.getElementById("h4-3");
thirdH4.textContent = siteContent["main-content"]["services-h4"];
let serviceContent = document.getElementById("serviceContent");
serviceContent.textContent = siteContent["main-content"]["services-content"];
let fourthH4 = document.getElementById("h4-4");
fourthH4.textContent = siteContent["main-content"]["product-h4"];
let productContent = document.getElementById("productContent");
productContent.textContent = siteContent["main-content"]["product-content"];
let fifthH4 = document.getElementById("h4-5");
fifthH4.textContent = siteContent["main-content"]["vision-h4"];
let visionContent = document.getElementById("visionContent");
visionContent.textContent = siteContent["main-content"]["vision-content"];
let contactH4 = document.getElementById("contact-h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
let p1 = document.getElementById("p1");
p1.textContent = siteContent["contact"]["address"];
let p2 = document.getElementById("p2");
p2.textContent = siteContent["contact"]["phone"];
let p3 = document.getElementById("p3");
p3.textContent = siteContent["contact"]["email"];
let footerTxt = document.getElementById("footerTxt");
footerTxt.textContent = siteContent["footer"]["copyright"];
