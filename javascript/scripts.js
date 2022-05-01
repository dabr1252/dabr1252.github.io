const form = document.getElementById('my_form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert("Message has been sent to Daniella!");
    form.reset();
});

