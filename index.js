var liColors = document.querySelectorAll('.liColor');
var Dtls = document.querySelectorAll('.dtls');
var detailsPortof = document.querySelectorAll('.details-portof');
var Closes = document.querySelectorAll('.clos-details-porto');
var Abt1 = document.getElementById('abt1');
var Abt2 = document.getElementById('abt2');
var Abt3 = document.getElementById('abt3');
var btnToggle = document.getElementById('btn-toggle-colors');

btnToggle.addEventListener('click', () => {
    btnToggle.classList.toggle('showBTN');
    document.getElementById('list-colors').classList.toggle('showList')
})


function changeActived() {
    liColors.forEach(liCol => liCol.classList.remove('active'));
    this.classList.add('active');
    
    let Primary = this.getAttribute('primary');
    console.log(Primary);
    
    document.documentElement.style.setProperty('--primary', Primary)
}

function changeDetails() {
    let kategori = this.getAttribute('kategori');
    detailsPortof.forEach(details => {
        const kategoriDetails = details.getAttribute('kategoriDetails')
        if(kategoriDetails === kategori) {
            details.classList.add('actives')
        }
    });
    console.log(kategori);
}

function changeDetailsx() {
    detailsPortof.forEach(details => {
        details.classList.remove('actives')
    });
}

function change1() {
    if(window.pageYOffset >= 500 && window.innerWidth >= 1000) {
            Abt1.classList.add('abt-show1')
            Abt2.classList.add('abt-show2')
            Abt3.classList.add('abt-show1')
    }else {
            Abt1.classList.remove('abt-show1')
            Abt2.classList.remove('abt-show2')
            Abt3.classList.remove('abt-show1')
    }
}

function changePR1() {
    if(window.pageYOffset >= 1000 && window.innerWidth >= 1000) {
        var Prjs1 = document.querySelectorAll('.prjs1');
        Prjs1.forEach(details => {
            details.classList.add('pr-show1')
        });
    }else {
        var Prjs1 = document.querySelectorAll('.prjs1');
        Prjs1.forEach(details => {
            details.classList.remove('pr-show1')
        });
    }
}

function changePR2() {
    if(window.pageYOffset >= 2200 && window.innerWidth >= 1000) {
        var Prjs2 = document.querySelectorAll('.prjs2');
        Prjs2.forEach(details => {
            details.classList.add('pr-show2')
        });
    }else {
        var Prjs2 = document.querySelectorAll('.prjs2');
        Prjs2.forEach(details => {
            details.classList.remove('pr-show2')
        });
    }
}

function changePR3() {
    if(window.pageYOffset >= 2500 && window.innerWidth >= 1000) {
        var Prjs3 = document.querySelectorAll('.prjs3');
        Prjs3.forEach(details => {
            details.classList.add('pr-show3')
        });
    }else {
        var Prjs3 = document.querySelectorAll('.prjs3');
        Prjs3.forEach(details => {
            details.classList.remove('pr-show3')
        });
    }
}

function changePR4() {
    if(window.pageYOffset >= 2900 && window.innerWidth >= 1000) {
        var Prjs4 = document.querySelectorAll('.prjs4');
        Prjs4.forEach(details => {
            details.classList.add('pr-show4')
        });
    }else {
        var Prjs4 = document.querySelectorAll('.prjs4');
        Prjs4.forEach(details => {
            details.classList.remove('pr-show4')
        });
    }
}

function changePR5() {
    if(window.pageYOffset >= 3000 && window.innerWidth >= 1000) {
        var Prjs5 = document.querySelectorAll('.list-skills');
        Prjs5.forEach(details => {
            details.classList.add('pr-show5')
        });
    }else {
        var Prjs5 = document.querySelectorAll('.list-skills');
        Prjs5.forEach(details => {
            details.classList.remove('pr-show5')
        });
    }
}

window.addEventListener('scroll', change1)
window.addEventListener('scroll', changePR1)
window.addEventListener('scroll', changePR2)
window.addEventListener('scroll', changePR3)
window.addEventListener('scroll', changePR4)
window.addEventListener('scroll', changePR5)


liColors.forEach(liz => liz.addEventListener('click', changeActived));
Dtls.forEach(dtls => dtls.addEventListener('click', changeDetails));
Closes.forEach(close => close.addEventListener('click', changeDetailsx));

window.addEventListener('scroll', () => {
    const ps = document.getElementById('ps');
    ps.innerText = window.pageYOffset
})


