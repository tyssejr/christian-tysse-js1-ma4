const getApi = "https://api.rawg.io/api/games"

fetch(getApi)
.then(function(response){
    return response.json();
})
.then(function(json){
    handleJ(json);
})
.catch(function(error){
    console.log(error);
});

function handleJ(json) {
    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".game");

    let html = "";

    results.forEach(function createGames(result) {

        html += `<div class="game">
        <h2>${result.name}</h2>
        <img src="${result.background_image}" alt="${result.name}">
    </div>`;
    });

    resultsContainer.innerHTML = html;
};

