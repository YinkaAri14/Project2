// JS scripts placed here

const button = document.getElementById('submit');

button.addEventListener("click", (ev) => {
    // Prevent the default action of the event
    ev.preventDefault();

    // declare variables for use
    const body = document.querySelector('body');
    const nameOutput = document.getElementById('form-name');
    console.log(nameOutput);


    // Get the value of the input field
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    console.log('nameInput:', nameInput);
    console.log('nameValue:', nameValue);
    nameOutput.innerHTML = nameValue;
    // alert('You clicked me!, ' + nameValue);

    // Perform action: add class to body element
    body.classList.add('form-submitted');

    window.scrollTo(0, 0);
});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  document.getElementById('open-popup').onclick = function() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('name').focus(); // Focus on the first input
};

document.getElementById('close-popup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
};