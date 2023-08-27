const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// const generateJokes = () => {
//     fetch('https://official-joke-api.appspot.com/random_joke')
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.setup + "<br>" + data.punchline;
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// jokeBtn.addEventListener('click', generateJokes);

// generateJokes();


const generateJokes = async () => {
try{
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data  =  await  res.json();
    jokes.innerHTML = data.setup + "<br>" + data.punchline;

}catch(error){
    console.log(`the error is ${error}`);
}
}

jokeBtn.addEventListener('click', generateJokes);

generateJokes();

