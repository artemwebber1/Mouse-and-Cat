//icon choose start
const MainImg = document.getElementById('choosen');
const MainImgpath = MainImg.getAttribute('src');
if(MainImgpath == '../img/571-5719247_transparent-pusheen-clip-art-pusheen-cat-gif-png.png'){
    MainImg.style.height = '100px';
    MainImg.style.width = '150px';
}


//promocode start
document.getElementById('buttonpromo').addEventListener('click', promoCode);
function promoCode(){
    const input = document.getElementById('promo');
    if(input.value === 'SKINFORg1eb'){
        const avatars = document.querySelector('div.avatars');
        const open = document.querySelector('.open');
        const newIcon = document.createElement('img');
        newIcon.src = '../img/poop_PNG46.png';
        newIcon.className = 'new';
        document.body.appendChild(newIcon);
        const firstElem = avatars.lastChild.nextSibling;
        avatars.insertBefore(newIcon, firstElem);


        document.querySelector('.new').addEventListener('click', game);
        function game(){
            MainImg.src = '../img/poop_PNG46.png';
        }
    }
}
//promocode end





const avatar1 = document.querySelector('.avatar1');
function av1(){
    MainImg.src = '../img/571-5719247_transparent-pusheen-clip-art-pusheen-cat-gif-png.png';
}
avatar1.addEventListener('click', av1);


const avatar2 = document.querySelector('.avatar2');
function av2(){
    MainImg.src = '../img/Halloween-Cat-Vector-PNG-Photos.png';
}
avatar2.addEventListener('click', av2);

//icon choose end


link = document.getElementById('myScroll');
function scrollToElement() {
    const jjjj = MainImg.getAttribute('src');
    if(jjjj == '../img/571-5719247_transparent-pusheen-clip-art-pusheen-cat-gif-png.png'){
        document.location.href = '../field/f.html';
    }else if(jjjj == '../img/Halloween-Cat-Vector-PNG-Photos.png'){
        document.location.href = '../field/f2.html';
    }else if(jjjj == '../img/poop_PNG46.png'){
        document.location.href = '../field/promoskin.html'
    }
}
link.addEventListener('click', scrollToElement);




