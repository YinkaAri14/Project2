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

});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }