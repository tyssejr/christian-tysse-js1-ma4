
const callApi = "https://api.rawg.io/api/games/";
const apiID = `${callApi}4200`;

fetch(apiID)

.then(function(response){
    return response.json();
})
.then(function(json){
    createGameDetails(json);
});

function createGameDetails(json) {
    console.dir(json);

    const imageLink = document.querySelector(".image");
    imageLink.style.backgroundImage = `url("${json.background_image_additional}")`;

    imageLink.alt = json.name;
    
    const name = document.querySelector("h1");
    name.innerHTML = json.name;
    
    const description = document.querySelector(".description")
    description.innerHTML = json.description;
}
