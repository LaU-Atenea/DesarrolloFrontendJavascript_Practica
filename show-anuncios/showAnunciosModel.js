export async function getAnuncios() {

    let anuncios = [];

    try{
        const response = await fetch('http://localhost:8000/api/anuncios')
        anuncios = await response.json();
        
    } catch (error) {
        throw new Error("No está siendo posible obtener los anuncios. Por favor, inténtelo de nuevo más tarde.")
    }

    return anuncios;
}