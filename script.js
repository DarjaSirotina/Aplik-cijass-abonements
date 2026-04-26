const manaPoga = document.getElementById('poga');
const mansPlans = document.getElementById('plans');
const mansDatums = document.getElementById('datums');
const manaAtbilde = document.getElementById('rezultats');

function aprekins() {
    const cena = Number(mansPlans.value);
    const izveletaisDatums = mansDatums.value;

    // 1. Pārbaude: ja kaut kas nav aizpildīts
    if (izveletaisDatums === "" || mansPlans.value === "") {
        manaAtbilde.innerHTML = "KĻŪDA: Aizpildi visus laukus!";
        manaAtbilde.style.color = "red"; // Nomainām krāsu uz sarkanu
        return; 
    }

    // 2. Ja viss ir pareizi, rēķinām un mainām krāsu uz zaļu
    manaAtbilde.style.color = "green"; 
    
    let teksts = "Sākums: " + izveletaisDatums + "<br>";

    if (cena === 10) {
        teksts = teksts + "Izvēlēts mēneša plāns (10 EUR).";
    } else {
        let ietaupijums = (10 * 12) - 96;
        teksts = teksts + "Izvēlēts gada plāns (96 EUR).<br>";
        teksts = teksts + "Ietaupījums: " + ietaupijums + " EUR!";
    }

    manaAtbilde.innerHTML = teksts;
}

manaPoga.addEventListener('click', aprekins);