const cat = document.querySelector('.enemy-cat');
cat.style.position = 'fixed';

document.onmousemove = (event) =>{
    cat.style.left = event.clientX - 100 + 'px';
    cat.style.top = event.clientY - 100 + 'px';
}
cat.onmouseover = () => {
    document.body.removeChild(cat);
    const loose = document.getElementById('gg');
    loose.innerHTML = 'YOU LOOSE';
    const btn = document.createElement('button');
    btn.className = 'press';
    btn.innerHTML = 'TRY AGAIN';
    document.body.appendChild(btn);









    const press = document.querySelector('.press').addEventListener('click', buttonPressed);
    function buttonPressed(){
        const update = document.getElementById('upd');
        update.content = '0';
    }
}