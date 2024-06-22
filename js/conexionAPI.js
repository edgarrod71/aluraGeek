const sitio = "http://localhost/one_alurageek"
async function listarProductos() {
    const conexion = await fetch(`${sitio}/productos`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });
    const conexionConv = await conexion.json();
    return conexionConv;
}

async function crearProducto(nombre, precio, imagen) {
    const conexion = await fetch(`${sitio}/productos`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
        })
    })
    if (!conexion.ok) {
        throw new Error("No fue posible enviar el video");
    }
    const conexionConv = await conexion.json();
    return conexionConv;
}

export const conexionAPI = {
    listarProductos, crearProducto
}

