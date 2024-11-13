// Develop the app further (4p).

//     Now add a form where you can enter a search term like in assignments 1-3
//     Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
//     Print each joke in this format:

// <article>
//     <p>Joke here<p>
// </article>

const form = document.getElementById("source");
const output = document.getElementById("results");

form.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    //  REQUEST DATA
    let target = evt.target;
    let q = target[0].value;
    // console.log(q);
    let request = await fetch(`https://api.chucknorris.io/jokes/search?query=${q}`, { method: 'GET' });
    let result_list = (await request.json())
    console.log(result_list.result)
    //  CLEAR OUTPUT DESTINATION
    output.innerHTML = ""
    //  OUTPUT DATA
    result_list.result.forEach(async (l) => {
        // console.log(l);
        // await l.forEach(async (v) => {
        // CARD
        var article = document.createElement("article");
        article.classList.add("card");
        // JOKE
        var joke = document.createElement("p");
        let text = document.createTextNode(l.value);
        joke.append(text);
        article.append(joke);
        // INSERT TO TARGET
        output.appendChild(article);
        // });
    });
});







// (async () => {
//     let request = await fetch(`https://api.chucknorris.io/jokes/random`, { method: 'GET' })
//     let result_list = await request.json();
//     console.log(result_list.value)
// })();









