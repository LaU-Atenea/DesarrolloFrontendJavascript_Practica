import { anuncios } from './showAnunciosModel.js'
import { buildAnuncio } from './showAnunciosView.js';

export function showAnunciosController(){
    
    const container = document.querySelector(".anuncio-container")

    anuncios.forEach((anuncio) => {
        
        const anuncioHtml = document.createElement("div");
        anuncioHtml.innerHTML = buildAnuncio(anuncio)

        container.appendChild(anuncioHtml)
    })
}