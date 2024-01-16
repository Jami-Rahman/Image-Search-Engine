const accessKey = "_zQ_Sr-FEvwiA1Qiw1J6i8nqWfJLV5aLd8ncNGxZ5Nc"
// secret key = "XOFOfzIsNE4e3PfwOW2nqcvZ9uFNxpg_qnqB2F-yA-g"

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if(page == 1){
        searchResult.innerHTML = "";
    }
    results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

// document.getElementById("show-more-btn").addEventListener('click', function(){
//     page++;
//     searchImages();
// })

showMore.addEventListener("click", ()=>{
    page++;
    searchImages()
})