// const button = document.getElementById('button');
// const audioElement = document.getElementById('audio');

// //// Disable/Enable Button
// function toggleButton() {
//   button.disabled = !button.disabled;
// }

// //// VoiceRSS Speech Function
// function tellMe(joke) {
//   const jokeString = joke.trim().replace(/ /g, '%20');
//   //// VoiceRSS Speech Parameters
//   VoiceRSS.speech({
//     key: '79616d76e10240d2995f54777483da93',
//     src: jokeString,
//     hl: 'en-us',
//     r: 0,
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false,
//   });
// }

// //// Get jokes from Joke API
// async function getJokes() {
//   let joke = '';
//   const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&idRange=0-200';
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     //// Assign One or Two Part Joke
//     if (data.setup) {
//       joke = `${data.setup} ... ${data.delivery}`;
//     } else {
//       joke = data.joke;
//     }
//     console.log(joke);
//     tellMe(joke);
//     //// Disable Button
//     toggleButton();
//   } catch (error) {
//     //// Catch Error Here
//        console.log('Something went wrong', error);
//   }
// }

// //// Event Listeners
// button.addEventListener('click', getJokes);
// audioElement.addEventListener('ended', toggleButton);


const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  // console.log('Tell Me', joke);
  VoiceRSS.speech({
    key: '79616d76e10240d2995f54777483da93',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
 });
}


// Get Jokes from Joke API
async function getJokes() {
  let joke = '';
  const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&idRange=0-200';
  try {
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Text-to-Speech
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (error) {
    // Catch Errors Here
    console.log('Check yur code something is wrong', error)
  }
}

// Event Listeners 
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);