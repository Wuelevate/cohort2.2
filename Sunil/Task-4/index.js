const api = 'https://official-joke-api.appspot.com/random_joke';
const jokeText = document.getElementById('joke-text');
const jokeType = document.getElementById('joke-type')
let currentJoke = null;

async function getJoke() {
    try {
        const response = await fetch(api);
        if (!response.ok)
        {
            throw new Error('Failed to fetch joke - Response not OKs');
        }
       const currentJoke = await response.json();

        jokeText.textContent = `${currentJoke.setup}- ${currentJoke.punchline}`;
        jokeType.textContent = currentJoke.type;

    } catch (error)
    {
        console.error('Error fetching joke:', error);
        document.getElementById('joke-text').textContent = 'Sorry,could not fetch a joke!';
    }
}

function displayJoke(joke) {
    console.log(joke);
}

function postJoke() {
    const newJoke = {
        setup: prompt('Enter the joke setup:'),
        punchline:prompt('Enter Punchline'),
        type: prompt('Enter the joke type:')
    };
    if (newJoke.setup && newJoke.type && newJoke.type) {
        currentJoke = newJoke;
        jokeText.textContent = ` ${newJoke.setup} - ${newJoke.punchline}`;
        jokeType.textContent = newJoke.type;
        alert('Joke posted successfully!');
    } else {
        alert('Invalid input. Please try again.');
    }
}


function editJoke() {
    if (currentJoke) {
        const newSetup = prompt('Enter the new joke setup:', currentJoke.setup);
        const newPunchline = prompt('Enter the new joke punchline:', currentJoke.punchline);
        const newtype = prompt('Enter the joke type:', currentJoke.type);

        if (newSetup && newPunchline && newtype) {
            currentJoke.setup = newSetup;
            currentJoke.punchline = newPunchline;
            currentJoke.type = newtype;

            jokeText.textContent = `${currentJoke.setup} - ${currentJoke.punchline}`;
            jokeType.textContent = currentJoke.type;
        } else {
            alert('Both setup and punchline are required!');
        }
    } else {
        alert('No joke available to edit!');
    }
}

function deleteJoke() {
    currentJoke = null;
    document.getElementById('joke-text').textContent = 'Deleted Successfully...';
    document.getElementById('joke-type').textContent = 'NA..';
}

