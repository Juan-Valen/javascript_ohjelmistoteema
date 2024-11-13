// Make an app that retrieves a random Chuck Norris joke and displays it in the console. (2p)

//     API to use: chucknorris.io
//     Send a request to https://api.chucknorris.io/jokes/random and print only the joke to the console (that would be the 'value' property)
//     No need to add a form.

(async () => {
    let request = await fetch(`https://api.chucknorris.io/jokes/random`, { method: 'GET' })
    let result_list = await request.json();
    console.log(result_list.value)
})();