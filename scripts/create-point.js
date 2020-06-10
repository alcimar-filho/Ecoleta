document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities);

function populateUFs(){
    const ufSelect = document.querySelector('select[name=uf]');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => res.json())
        .then(ufs =>{
            for( uf of ufs){
                ufSelect.innerHTML += `<option value ='${uf.id}'>${uf.nome}</option>`
            }
        })
}

populateUFs();

function getCities(event){
    
    const citySelect = document.querySelector('select[name=city]');

    const stateInput = document.querySelector('input[name=state]');

    stateInput.value = event.target.options[event.target.selectedIndex].text;

    citySelect.innerHTML = `<option value =''>Selecione a Cidade</option>`;

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`)
        .then(res => res.json())
        .then(cities =>{
            for( city of cities){
                citySelect.innerHTML += `<option value ='${city.nome}'>${city.nome}</option>`
            }
        })
    
    citySelect.disabled = false;
    console.log('mudou estado')

}


