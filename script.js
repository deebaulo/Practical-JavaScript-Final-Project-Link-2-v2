const answer = document.getElementById ('answer');
const answer2 = document.getElementById ('answer2');
const answer3 = document.getElementById ('answer3');
const answer4 = document.getElementById ('answer4');
const answer5 = document.getElementById ('answer5');
const question = document.getElementById ('question');
const question2 = document.getElementById ('question2');
const question3 = document.getElementById ('question3');
const question4 = document.getElementById ('question4');
const question5 = document.getElementById ('question5');

// Announcement Button

const announcementButton = document.getElementById('announcementButton');

announcementButton.addEventListener('click', function(){
    alert("Dear Valued Clients, We are excited to announce that BauTech is now ready to serve you even better! To celebrate, we're offering a special 50% discount for the first 5 clients who book an appointment with us this coming month. Don’t miss out on this limited-time offer!");
});

// End Announcement Button



// Questions 

question.addEventListener('click', function(){
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    } 
});

question2.addEventListener('click', function(){
    if (answer2.style.display === 'none') {
        answer2.style.display = 'block';
    } else {
        answer2.style.display = 'none';
    } 
});

question3.addEventListener('click', function(){
    if (answer3.style.display === 'none') {
        answer3.style.display = 'block';
    } else {
        answer3.style.display = 'none';
    } 
});

question4.addEventListener('click', function(){
    if (answer4.style.display === 'none') {
        answer4.style.display = 'block';
    } else {
        answer4.style.display = 'none';
    } 
});

question5.addEventListener('click', function(){
    if (answer5.style.display === 'none') {
        answer5.style.display = 'block';
    } else {
        answer5.style.display = 'none';
    } 
});

// End questions


// Contact Form 

const usernameInput = document.getElementById('userName');
const sendMessage = document.getElementById('sendMessage');
const notifMessage = document.getElementById('notifMessage');
const backButton = document.getElementById('backButton');

function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

sendMessage.addEventListener('click', function(){

    const userName = usernameInput.value.trim();

    if (userName === '') {
        notifMessage.textContent = 'Please enter your name and email address.';
    } else if (!isValidName(userName)) {
        notifMessage.textContent = 'Invalid input. Please use letters only.';
    } else {
        notifMessage.textContent = `Thank you, ${userName}! We've received your message and will contact you soon.`;
    }
});

backButton.addEventListener('click', function(){
    location.reload();
});

    


// PRICING 

//  Basic 

const yearDisplayOne = document.getElementById('zeroYearOne');
const incrementButtonOne = document.getElementById('incrementButtonOne');
const decrementButtonOne = document.getElementById('decrementButtonOne');
const resetPlanButtonOne = document.getElementById('resetPlanButtonOne');

resetPlanButtonOne.addEventListener('click', function(){
    location.reload();
});

let zeroYearOne = 0;

incrementButtonOne.addEventListener('click', function(){
    zeroYearOne += 1;
    yearDisplayOne.textContent = zeroYearOne;

});

decrementButtonOne.addEventListener('click', function(){
    zeroYearOne -= 1;
    yearDisplayOne.textContent = zeroYearOne;

});

// Standard 

const yearDisplayTwo = document.getElementById('zeroYearTwo');
const incrementButtonTwo = document.getElementById('incrementButtonTwo');
const decrementButtonTwo = document.getElementById('decrementButtonTwo');
const resetPlanButtonTwo = document.getElementById('resetPlanButtonTwo');

resetPlanButtonTwo.addEventListener('click', function(){
    location.reload();
});

let zeroYearTwo = 0;

incrementButtonTwo.addEventListener('click', function(){
    zeroYearTwo += 1;
    yearDisplayTwo.textContent = zeroYearTwo;

});

decrementButtonTwo.addEventListener('click', function(){
    zeroYearTwo -= 1;
    yearDisplayTwo.textContent = zeroYearTwo;

});


// Premium 

const yearDisplayThree = document.getElementById('zeroYearThree');
const incrementButtonThree = document.getElementById('incrementButtonThree');
const decrementButtonThree = document.getElementById('decrementButtonThree');
const resetPlanButtonThree = document.getElementById('resetPlanButtonThree');

resetPlanButtonThree.addEventListener('click', function(){
    location.reload();
});

let zeroYearThree = 0;

incrementButtonThree.addEventListener('click', function(){
    zeroYearThree += 1;
    yearDisplayThree.textContent = zeroYearThree;

});

decrementButtonThree.addEventListener('click', function(){
    zeroYearThree -= 1;
    yearDisplayThree.textContent = zeroYearThree;

});

// Choose Plan Button

// Basic 

const notification1 = document.getElementById('notification1');
const choosePlanButtonOne = document.getElementById('choosePlanButtonOne');


choosePlanButtonOne.addEventListener('click', function(){
    if (notification1.style.display === 'none') {
        notification1.style.display = 'block';
    } else notification1.style.display = 'none';

});

// Standard

const notification2 = document.getElementById('notification2');
const choosePlanButtonTwo = document.getElementById('choosePlanButtonTwo');


choosePlanButtonTwo.addEventListener('click', function(){
    if (notification2.style.display === 'none') {
        notification2.style.display = 'block';
    } else notification2.style.display = 'none';

});

// Premium 

const notification3 = document.getElementById('notification3');
const choosePlanButtonThree = document.getElementById('choosePlanButtonThree');


choosePlanButtonThree.addEventListener('click', function(){
    if (notification3.style.display === 'none') {
        notification3.style.display = 'block';
    } else notification3.style.display = 'none';

});


// FAQs Toogle Menu 
// 02-10-2025, 10:23PM


