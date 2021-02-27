//Made a let to check what slide we are on.
//We set it == 1 because that is what we want it to start on.
let slideIndex = 1;
//function that shows the slides and passes the "slideIndex" param.
showSlides(slideIndex);

//another function that passes an "n" which is the number of slides.
//this function increments the value of slideIndex by one.
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//this function sets the slideIndex value to the current slide your on.
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//function that shows the slide depending what slide your on.
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    //"n" basically checks the length of the slides.
    //There are 4 classes of slides.
    if (n > slides.length) {
        //If you go past the length of the slides
        //by clicking next,
        //it will go back to the first slide.
        slideIndex = 1;
    }
    if (n < 1) {
        //If you go less than the length of slides
        //by clicking prev,
        //it will set the slideIndex to the length of the slides,
        //which will go to the 4th slide.
        slideIndex = slides.length;
    }
    //The for loop iterates through the slides and will set the display none.
    //Without this, it will just add a new slide image everytime it's clicked.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //For loop for the dots. Whichever dot you click on will set it to the
    //active class and will display the slide its on.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active ", "");
    }
    //This displays the slides so the user can see them.
    slides[slideIndex-1].style.display = "block";
}
