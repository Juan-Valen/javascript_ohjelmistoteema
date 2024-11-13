// Develop the app even further. 
// Optional chaining is not the best way to handle missing image.
// Use ternary operator or if/else to add a default image if TV-show is missing image property. (2p)

//     Use https://via.placeholder.com/210x295?text=Not%20Found as the default image.


const form = document.getElementById("source");
const output = document.getElementById("results");

form.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    //  REQUEST DATA
    let target = evt.target;
    let q = target[0].value;
    console.log(q);
    let request = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`, { method: 'GET' });
    let result_list = (await request.json())
    //  CLEAR OUTPUT DESTINATION
    output.innerHTML = ""
    //  OUTPUT DATA
    console.log(result_list);

    result_list.forEach(async (v) => {
        // CARD
        var article = document.createElement("article");
        article.classList.add("card");
        // HEADER
        var header = document.createElement("h2");
        var header_text = document.createTextNode(v.show.name);
        header.append(header_text);
        article.append(header);
        // FIGURE
        var image_container = document.createElement("figure");
        var image = document.createElement("img");
        if (v.show.image.medium) {
            image.setAttribute("src", v.show.image.medium);
        } else {
            image.setAttribute("src", "https://via.placeholder.com/210x295?text=Not%20Found");
        }
        image.setAttribute("alt", v.show.name);
        image_container.append(image);
        article.append(image_container);
        // DESCRIPTION
        var description = document.createElement("div");
        description.innerHTML = v.show.summary
        article.append(description);
        // INSERT TO TARGET
        output.appendChild(article);
    });
});

