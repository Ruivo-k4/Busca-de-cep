const historicoCeps = JSON.parse(localStorage.getItem('histoCep')) || [];
const historicoEstado = JSON.parse(localStorage.getItem('histoUf')) || [];
const historicoCidade = JSON.parse(localStorage.getItem('histoCid')) || [];
const historicoLogradouro = JSON.parse(localStorage.getItem('histoLog')) || [];

export function config(newCep, newState, newCity, newPlace){
    historicoCeps = newCep;
    historicoEstado = newState;
    historicoCidade = newCity;
    historicoLogradouro = newPlace;

    localStorage.setItem("histoCep", JSON.stringify(historicoCeps));
    localStorage.setItem("histoUf", JSON.stringify(historicoEstado));
    localStorage.setItem("histoCid", JSON.stringify(historicoCidade));
    localStorage.setItem("histoLog", JSON.stringify(historicoLogradouro));
}

/*

*/