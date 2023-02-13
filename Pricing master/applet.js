const planSwitch = document.querySelector('.plans-switch');
const hobbyRate = document.getElementById('hobby-rate');
const proRate = document.getElementById('pro-rate');
const teamRate = document.getElementById('team-rate');

planSwitch.addEventListener('change', ()=>{
    if(planSwitch.checked){
        hobbyRate.innerHTML = "79";
        proRate.innerHTML = "119";
        teamRate.innerHTML = "299";
    }else{
        hobbyRate.innerHTML = "8";
        proRate.innerHTML = "12";
        teamRate.innerHTML = "30";
    }
})