window.addEventListener('load', () => {

    console.log('Documento vinculado con exito');

    let $ = (e) => document.querySelector(e)

    let body = $('body')
    let h1 = $('h1')

    let modoOscuro = confirm("¿Desea modoOscuro?")
    console.log(modoOscuro);

    if(modoOscuro){
        body.style.backgroundColor = "#7f7f7f"
        body.classList.add('fondoMoviesList')
    }

    h1.innerHTML = 'LISTADO DE PELICULAS'

    h1.style.color = "white"
    h1.style.backgroundColor = "teal"
    h1.style.padding = "20px"


    let logo = $('figure')

    logo.addEventListener('mouseover', (e) => {
        body.style.backgroundColor = "#7f7f7f"
        body.classList.add('fondoMoviesList')
    })
    logo.addEventListener('mouseleave', (e) => {
        body.style.backgroundColor = "#fff"
        body.classList.remove('fondoMoviesList')
    })


    



})