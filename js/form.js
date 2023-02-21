const firstName = document.getElementById('names');
const email = document.getElementById('email');
const tel = document.getElementById('Phone');
const message = document.getElementById('message');
const contact_us_form = document.getElementById('contactForm');
const correct_response_indicator = document.getElementById('correct_response');
const error_response_indicator = document.getElementById('error_response');

const SubmitContactForm = (e) =>{
    e.preventDefault();
    error_response_indicator.style.display="none";
    correct_response_indicator.style.display="none";
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/randybarywhite@gmail.com', {
    _subject: "Contact Form Questions/Inquiries",
    FirstName: names.value,
    Email: email.value,
    Phone: Phone.value,
    Message: message.value
    })
    .then(response => response.status == 200 ? (correct_response_indicator.style.display="block", error_response_indicator.style.display="none"): null)
    .catch(error => (console.log(error), correct_response_indicator.style.display="none", error_response_indicator.style.display="block"));
    contact_us_form.reset();
}