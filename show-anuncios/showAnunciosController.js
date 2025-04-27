import { getAnuncios } from './showAnunciosModel.js'
import { buildAnuncio, buildNoAnunciosAdvice } from './showAnunciosView.js';

export async function showAnunciosController(){
    const container = document.querySelector(".anuncio-container")
    const anuncios = await getAnuncios();

    if (anuncios.length > 0) {
        drawAnuncios(anuncios, container)
    } else {
        container.innerHTML = buildNoAnunciosAdvice()
    }

 }

 function drawAnuncios(anuncios, container) {
    
    container.innerHTML = '';

    anuncios.forEach((anuncio) => {
        
        const anuncioHtml = document.createElement("div");
        anuncioHtml.innerHTML = buildAnuncio(anuncio)

        container.appendChild(anuncioHtml)
    })
 }