import { getAnuncios } from './showAnunciosModel.js'
import { buildAnuncio, buildNoAnunciosAdvice} from './showAnunciosView.js';

export async function showAnunciosController(){
    const container = document.querySelector(".anuncio-container")
    const loader = document.querySelector(".loader")

    try {
      loader.classList.remove("hidden")
      const anuncios = await getAnuncios();
      drawAnuncios(anuncios, container)
    } catch (error) {
      alert(error.message)
    } finally {
      loader.classList.add("hidden")
    }

 }

 function drawAnuncios(anuncios, container) {

    container.innerHTML = '';

    if (anuncios.length === 0) {
        container.innerHTML = buildNoAnunciosAdvice()
    }
    
    anuncios.forEach((anuncio) => {
        
        const anuncioHtml = document.createElement("div");
        anuncioHtml.innerHTML = buildAnuncio(anuncio)

        container.appendChild(anuncioHtml)
    })
 }