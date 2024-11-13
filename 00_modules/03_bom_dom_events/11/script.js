// Modify the program to open large image in a modal when <article> is clicked. (6p)

//     kick yourself at this point if you used innerHTML to create the <article> and its content.
//     add the following html code between </div> and </body> manually to the HTML-document (no JS)

// <dialog>
//    <span>&#x2715;</span>
//    <img>
// </dialog>

//     picArray has two images for each item: medium and large. 
// Medium is used in the <img> inside the <article> and large is used in the <img> inside the <dialog>.
//     use showModal() and close() functions to show and hide <dialog>
//     the same time you are opening the modal, you should put the large image to the <img> in the modal.
//     Don't forget to add alt attribute.
//     use <span> inside <dialog> to close the modal.

'use strict';
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

// add your code here

const currentTarget = document.getElementById("pictures");
const dialog = document.getElementsByTagName("dialog")[0];
const dialog_close_icon = dialog.getElementsByTagName("span")[0]

dialog_close_icon.onclick = (evt) => {
  dialog.close();
}

picArray.forEach((v) => {
  // {
  //   title: 'Title 1',
  //   caption: 'Caption 1',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
  //   image: {
  //     large: 'img/pic1.jpg',
  //     medium: 'thumbnails/pic1.jpg'
  //   }
  // }

  // CARD
  var article = document.createElement("article");
  article.classList.add("card");
  article.addEventListener("click", (evt) => {
    let img = dialog.getElementsByTagName("img")[0]
    img.setAttribute("src", v.image.large)
    img.setAttribute("alt", v.title)
    dialog.append();
    dialog.showModal();
  })
  // HEADER
  var header = document.createElement("h2");
  var header_text = document.createTextNode(v.title);
  header.append(header_text);
  article.append(header);
  // FIGURE
  var image_container = document.createElement("figure");
  var image = document.createElement("img");
  image.setAttribute("src", v.image.medium);
  image.setAttribute("alt", v.title);
  image_container.append(image);
  var image_caption = document.createElement("figcaption");
  var caption_text = document.createTextNode(v.caption);
  image_caption.append(caption_text);
  image_container.append(image_caption);
  article.append(image_container);
  // DESCRIPTION
  var description = document.createElement("p");
  var description_text = document.createTextNode(v.description);
  description.append(description_text);
  article.append(description);
  // INSERT TO TARGET
  currentTarget.appendChild(article);
});

// const articles = document.getElementsByTagName("article");
// articles.forEach((v) => {
//   v.
// })




//     The structure of the articles should be this:

// <article class="card">
//    <h2>title_from_picArray</h2>
//    <figure>
//       <img src="medium_image_from_picArray" alt="title_from_picArray">
//       <figcaption>caption_from_picarray</figcaption>
//    </figure>
//    <p>description_from_picArray</p>
// </article>





