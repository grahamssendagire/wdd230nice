// Selecting the HTML element in the document ,
// first select all of the HTML elements, 
// that will need to be manipulated and assign them to const variables.
const temperature = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#description');
const town = document.querySelector('#town');
//creating required varriables for the url
const myKey = 'eebcc36575ef71b5ff911dc89b45a777'
const myLat = '0.31689'
const myLong = '32.58540'
//creating a URL path using templete literals,
//Declare a const variable named "url" and assign it a valid URL string as coppied from the openweathermap.org.

const myURL = 'https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial';
// https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}
// Try to grab the current Weather Data
async function apiFetch() {
    try{
      const response = await fetch(myURL);
      if(response.ok) {
        const data = await response.json();
        console.log(data); // testing only
         displayResults(data); //uncomment when ready
      } else{
          throw Error(await response.text());
      }
      } catch (error) {
          console.log(error);
        } 
        //display the jason data on my web page.
    function displayResult(data){
        console.log("hello")
    }
}
apiFetch();



