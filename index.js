import { loaderController } from "./loader/loaderController.js";
import { noticationsController } from "./notifications/notificationsController.js";
import { showAnunciosController } from "./show-anuncios/showAnunciosController.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".anuncio-container")
    const loader = document.querySelector(".loader")
    const notifications = document.querySelector(".notifications")
    const { show, hide } = loaderController(loader)
    const { showNotification} = noticationsController(notifications)

    container.addEventListener("load-anuncios-started", () => {
        show()
    })
    container.addEventListener("load-anuncios-finished", () => {
        hide()
        showNotification('ya he terminado de cargar anuncios')
    })
    container.addEventListener("load-anuncios-error", (event) => {
        const errorMessage = event.detail;
        showNotification(errorMessage)
    })

    showAnunciosController(container)

    
})
