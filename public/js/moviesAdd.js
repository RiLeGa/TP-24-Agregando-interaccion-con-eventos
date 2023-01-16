window.addEventListener('load', () => {

    console.log('Documento vinculado con exito');

    let $ = (e) => document.querySelector(e)


    let h1 = $('h1')
    let section = $('section')
    let article = $('article')
    let titulo = $('.moviesAddTitulo')
    let inputTitulo = $('#titulo')


    h1.innerHTML = "AGREGAR PELICULAS"
    h1.classList.add('titulo')

    article.classList.add('fondoTransparente')
    
    section.classList.add('fondoCRUD')

    titulo.addEventListener('mouseover', (e) => {
        console.log('estas en el titulo')
        titulo.style.color = "red"
    })
    titulo.addEventListener('mouseleave', (e) => {
        titulo.style.color = "black"
    })

    let magic = 0
    inputTitulo.addEventListener('keypress', function(e) {
        console.log('Tecla presionada ' + e.key);
        
        switch (true) {
            case (e.key=='s' || e.key=='S') && (magic===0 || magic===1):
                magic = 1
                console.log('el estado es ' + magic);
                break;
            case (e.key=='e' || e.key=='E') && magic===1:
                magic = 2
                console.log('el estado es ' + magic);
                break;
            case (e.key=='c' || e.key=='C') && magic===2:
                magic = 3
                console.log('el estado es ' + magic);
                break;
            case (e.key=='r' || e.key=='R') && magic===3:
                magic = 4
                console.log('el estado es ' + magic);
                break;
            case (e.key=='e' || e.key=='E') && magic===4:
                magic = 5
                console.log('el estado es ' + magic);
                break;
            case (e.key=='t' || e.key=='T') && magic===5:
                magic = 6
                console.log('el estado es ' + magic);
                break;
            case (e.key=='o' || e.key=='O') && magic===6:
                magic = 7
                console.log('el estado es ' + magic);
                break;
        
            default:
                magic = 0
                console.log('el estado es ' + magic);
                break;
        }

        if (magic === 7) {
            window.alert('SECRETO MAGICO')
        }
    })

})
