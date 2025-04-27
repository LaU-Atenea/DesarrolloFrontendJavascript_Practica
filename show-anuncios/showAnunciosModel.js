export async function getAnuncios() {
    const response = await fetch('http://localhost:8000/api/anuncios')
    const anuncios = await response.json();

    return anuncios;
}