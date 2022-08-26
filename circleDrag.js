let docElement=document.documentElement;
let circle = document.querySelector('.circle');

    docElement.addEventListener('mousemove', e => {
    let mouseLeft=e.clientX,
        mouseTop = e.clientY;

        docElement.style.setProperty('--left', `${mouseLeft}px`);
        docElement.style.setProperty('--top', `${mouseTop}px`);

     let borderColor = Math.floor(Math.random() * 1000);
     circle.style.borderColor=`hsl(${borderColor}, 100%, 50%, 0.5)`;
    
    });



    