export const buildAnuncio = (anuncio) => {
    return `
    <p>${anuncio.nombre}</p>
    <p>${anuncio.descripcion}</p>
    <p>${anuncio.precio}</p>
    <p>${anuncio.tipo}</p>
    `
}