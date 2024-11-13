// Make an app that retrieves information about a TV series you enter 
//  displays it in the console. (2p)

//     API to use: TVMaze API
//     First, make a valid HTML page with a search form. Example form:

// <form action="https://api.tvmaze.com/search/shows">
//   <input id="query" name="q" type="text">
//   <input type="submit" value="Search">
// </form>

//     Test the form. The result should be a page full of JSON formatted data.





const form = document.getElementById("source");

form.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    let target = evt.target;
    let q = target[0].value;
    console.log(q);
    let request = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`, { method: 'GET' });
    console.log(await request.json());
});

