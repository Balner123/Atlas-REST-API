const staty = document.getElementById('staty');
const modalBody = document.querySelector('.modal-body');



function fern(region){



  staty.innerHTML = '';


  fetch(`https://restcountries.com/v3.1/${region}`)
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);

    data.forEach(stat => {
      let blockcountry = `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-5">
        <div class="card h-300 w-200" data-bs-toggle="modal" data-bs-target="#myModal" data-country="${stat.name.official}">
            <img class="card-img-top" src="${stat.flags.png}" alt="${stat.name.official}" />
          </a> 
          <div class="card-body">
            <h4 class="card-title">${stat.translations.ces.common}</h4>
            
          </div>
        </div>
      </div>`;
      staty.innerHTML += blockcountry;
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', function() {
        const countryName = this.getAttribute('data-country');
        const countryData = data.find(stat => stat.name.official === countryName);
        renderModalContent(countryData);
      });
    });
  });

}



function renderModalContent(countryData) {
  modalBody.innerHTML = `
  
    <h5>${countryData.translations.ces.common}</h5>
    <img src="${countryData.flags.png}" alt="${countryData.name.official}" />
    <img width="300px" heigth="300px" src="${countryData.coatOfArms.png}"/>
    <p>Population: ${countryData.population}</p>
    <p>Area: ${countryData.area} km<sup>2</sup></p>
    <a href="https://www.google.com/maps/place/${countryData.maps.googleMaps}" target="_blank">Zobrazit na mapě Google</a>
  `;
}


fern('all');


var time;

function loading(){
  document.getElementById("loader").style.display = "block";
  document.getElementById("loadP").style.display = "none";
  time = setTimeout(showP, 1000);
}

function showP(){
  document.getElementById("loader").style.display = "none";
  document.getElementById("loadP").style.display = "block";
}



