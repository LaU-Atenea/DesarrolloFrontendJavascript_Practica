import { getAnuncios } from './showAnunciosModel.js'
import { buildAnuncio, buildNoAnunciosAdvice} from './showAnunciosView.js';

export async function showAnunciosController(container){

    try {
      const event = new CustomEvent("load-anuncios-started")
      container.dispatchEvent(event)
      const anuncios = await getAnuncios();
      drawAnuncios(anuncios, container)
    } catch (error) {
      const event = new CustomEvent("load-anuncios-error", {
        detail: error.message
      })
      container.dispatchEvent(event)
    } finally {
      const event = new CustomEvent("load-anuncios-finished")
      container.dispatchEvent(event)
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