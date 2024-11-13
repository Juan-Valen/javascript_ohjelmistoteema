// Develop the app even further. 
// Print the following information for all series from the search result on the web page. (7p)

//     required information: Name, link to details (url), medium image and summary
//     show the name in <h2> element
//     show the url in <a> element. Also add target="_blank" to the link.
//     show the medium image with <img src="" alt="">. Add medium image to src attribute and name property to alt attribute.

//     some TV-shows don't have images. This will cause an error. You can fix this by adding ? operator to image property. Example: tvShow.show.image?.medium;.
//     This is called optional chaining.
//     show summary in <div> element (not <p>).
//     This is because the summary is already in <p> element, and the result will not be valid if <p> is inside another <p>.
//     collect the elements to <article> elements and append <article> elements to the HTML document.
//         make <div id="results"> element to the HTML document where you append the <article> elements.
//     clear the old results with innerHTML = '' before you append the new results.


// name, url_to_details, medium_image, summary
// <article class="card">
//    <h2>name</h2>
//    <a href="" target="_blank"></a>
//    <figure>
//       <img src="image_medium" alt="image_name">
//       <figcaption>caption_from_picarray</figcaption>
//    </figure>
//    <div>summary</div>
// </article>


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

    result_list.forEach((v) => {
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
        image.setAttribute("src", v.show.image.medium);
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

