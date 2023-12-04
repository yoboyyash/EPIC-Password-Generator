// Assignment code here

// From my understanding I went about this by reserching how I can code a js function to generate a password and then match all acceptance criterias.
// These consts elements will use data from user input via querySelector by ID from the html
const password_el = document.querySelector('#password');
const length_el = document.querySelector('#length');
const uppercase_el = document.querySelector('#uppercase');
const lowercase_el = document.querySelector('#lowercase');
const numbers_el = document.querySelector('#numbers');
const symbols_el = document.querySelector('#symbols');

// const and evenListener click, for the button Submit to create a random password
const generate_button = document.querySelector(".submit"); 
generate_button.addEventListener('click', GeneratePassword); //eventListener that calls upon function GeneratePassword

// const and eventListener click, for the button Content Copy to copy password to clipboard
const copy_button = document.querySelector("#copy");
generate_button.addEventListener('click', CopyPassword); //eventListener that calls upon function CopyPassword

// consts consisting of all characters to use, string
const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "~!@#$%^&*()_+";

// The function that will call upon all of the above constants and write it out in the password feild
// Lets for password, chars and value (max value 16)
// chars +- if checked will include or will be left "blank"
// for to loop up to <= 16 the length of password to be made
function GeneratePassword () {
  let password = "";
  let length = length_el.value;
  let chars = "";

  chars += uppercase_el.checked ? uppercase_chars : "";
  chars += lowercase_el.checked ? lowercase_chars : "";
  chars += numbers_el.checked ? numbers_chars : "";
  chars += symbols_el.checked ? symbols_chars : "";

  for (let i = 1; i <= length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }

  password_el.value = password; 

}

// Async function to wait for the above value to generate and then copy it on clipboard
 async function CopyPassword() {
  if (navigator.clipboard) {
     await navigator.clipboard.writeText(password_el.value);

     alert("Password created & copied to clipboard") // Alert stating that password was copied
   }
 } 




// So far I have made my JS script to make random password now going to try and meet prompt criteria. 
// I really think this website doesn't need any prompts except the above alert on completion but for the learning aspect of it I am going to add a prompt for password length input.

function getUserInput() {
  
}

let userInput = prompt("How many characters would you like in your password? (max 16)");

document.getElementById('length').value = userInput;

// I really struggled with this part of the assignment because the criteria asked for a serise of prompts but I could only do a modal for card body. On that card all the information input is available and submission. 

// I hope that the modal pop up completes my criteria for "a serise of prompts". 


const modal = document.querySelector('#modal');
const openModal = document.querySelector('.btn');
const closeModal = document.querySelector('.submit');

openModal.addEventListener('click', () => {
  modal.show();
})

closeModal.addEventListener('click', () => {
  modal.close();
})

