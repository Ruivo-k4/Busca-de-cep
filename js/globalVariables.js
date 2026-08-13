const historicoCeps = JSON.parse(localStorage.getItem('cepsBuscados')) || {};

function config(newHisto){
    historicoCeps = newHisto;
    
    
}