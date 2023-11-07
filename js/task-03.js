const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

function createMarkup(arr) {
  const markup = arr.map(({url, alt}) => `
  <li>
  <img src="${url}" alt="${alt}" width="500"/>
  </li>
  
  
  `).join("")
  console.log(markup);

  list.insertAdjacentHTML("beforeend", markup)
}

createMarkup(images)


// {
//   const li = document.createElement("li");
//   const imgEl = document.createElement("img");
//   const h2 = document.createElement("h2")

//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.style.width = "300px"

//   h2.textContent = alt;

//   li.append(imgEl, h2)

//   return li;
  
// }