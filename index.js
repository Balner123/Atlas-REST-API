const staty = document.getElementById('staty');

fetch('https://restcountries.com/v3.1/region/europe')
.then((Response) => Response.json())
.then((data) => {

    console.log(data);

    data.forEach(stat => {

        let blockcountry = `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-5">
        <div class="card h-300 w-200">
            <a href="${stat.maps.googleMaps}" target="_blank">
            <img class="card-img-top" src="${stat.flags.png}" alt="${stat.name.official}" />
            </a> 
            <div class="card-body">
                <h4 class="card-title">${stat.translations.ces.common}</h4>
                <p class="card-text">population : ${stat.population}</p>
                <p>Rozloha ${stat.area} km<sup>2</sup></p>
            </div>
            
        </div>
        
    </div>`;

    staty.innerHTML += blockcountry;




    });







  //  staty.innerHTML = data[9].translations.ces.common;
})

