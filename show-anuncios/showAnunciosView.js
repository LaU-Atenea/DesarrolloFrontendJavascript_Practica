export const buildAnuncio = (anuncio) => {
    return `
    <p>${anuncio.nombre}</p>
    <p>${anuncio.descripcion}</p>
    <p>${anuncio.precio}</p>
    <p>${anuncio.tipo}</p>
    `
}

export const buildNoAnunciosAdvice = () => {
    return '<h3>Lo lamentamos, pero de momento no hay anuncios disponibles. Inténtalo de nuevo más adelante.</h3>'
}