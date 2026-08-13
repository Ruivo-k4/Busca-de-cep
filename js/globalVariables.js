const historicoCeps = JSON.parse(localStorage.getItem('cepsBuscados')) || {};
const historicoEstado = JSON.parse(localStorage.getItem('cepsBuscados')) || {};
const historicoCidade = JSON.parse(localStorage.getItem('cepsBuscados')) || {};
const historicoLogradouro = JSON.parse(localStorage.getItem('cepsBuscados')) || {};

export function config(newHisto, newState, newCity, newPlace){
    historicoCeps = newHisto;
    historicoEstado = newState;
    historicoCidade = newCity;
    historicoLogradouro = newPlace;

    localStorage.setItem("historicoCeps", JSON.stringify(historicoCeps));
    localStorage.setItem("historicoEstado", JSON.stringify(historicoEstado));
    localStorage.setItem("historicoCidade", JSON.stringify(historicoCidade));
    localStorage.setItem("historicoLogradouro", JSON.stringify(historicoLogradouro));
    
    
}