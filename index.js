
// GETTING THE HASH FROM URL

const { hash } = window.location;
const message = atob(hash.replace('#',''));

// IF THERE IS A HASH, TOGGLE THE HIDDEN DECRYPTION DIV

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
}

// COLLECTING MESSAGE INFO

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();                 // PREVENTS BROWSER AUTO SUBMITTING FORM

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide'); 

    const input = document.querySelector('#message-input'); // extract value
    const encrypted = btoa(input.value);                    // encrypt message

//    document.querySelector('#link-input').value = encrypted  // add to friend link

//    document.querySelector(
//        '#link-input'
//        ).value = `${window.location.href}#${encrypted}`;  //making a URL that will create an actualy link.

// DO THE ABOVE, BUT AUTOSELECT TEXT FOR USER


    const linkinput = document.querySelector('#link-input')
    linkinput.value = `${window.location.href}#${encrypted}`;  
    linkinput.select();
});

function myFunction() {
    var copyText = document.querySelector('#link-input');
    console.log(copyText)
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    alert("Copied the code: " + copyText.value);
  }