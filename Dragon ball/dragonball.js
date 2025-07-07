const subDivs = document.querySelectorAll(".pages");

    subDivs.forEach(div => {
        div.addEventListener("click", () => {
        subDivs.forEach(d => d.classList.remove("selected"));
        div.classList.add("selected");
        });
    });

    if (subDivs.length > 0) {
        subDivs[0].classList.add("selected");
    }

let currentPage = 1;

function fetchData(myData){
    currentPage = myData;
    var viewport = document.getElementById("content");
    viewport.innerHTML = "";
    fetch(`https://dragonball-api.com/api/characters?page=${myData}&limit=10`)
    .then((response) => {

        if(!response.ok){
            throw new error("couldn't fetch resource");
        }
        return response.json()
    })
    
    .then((data) =>{
        var dataValues = data.items;
        for(specific of dataValues){
            viewport.innerHTML += `
            <div id="elements">
                <div id="image">
                    <img id="sprites" src="${specific.image}" alt="">
                </div>
                <div id="info">
                    <p id="name">NAME:  ${specific.name}</p>
                    <p id="ki">KI:  ${specific.ki}</p>
                    <p id="maxKi">MAX-KI:  ${specific.maxKi}</p>
                    <p id="race">RACE:  ${specific.race}</p>
                    <p id="gender">GENDER:  ${specific.gender}</p>
                    <p id="affiliation">AFFILIATION:  ${specific.affiliation}</p>
                </div>
            </div>
            `
            subDivs.forEach(d => d.classList.remove("selected"));
            const activeBtn = document.querySelector(`.pages[data-page="${myData}"]`);
            if (activeBtn) {
                activeBtn.classList.add("selected");
            }

        }
    } )

    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}

function previous(){
    if(currentPage > 1){
        fetchData(currentPage - 1)
    }
}
function next(){
    if(currentPage < 6){
        fetchData(currentPage + 1)
    }
}
window.addEventListener("DOMContentLoaded", () => {
    fetchData(1);
});


