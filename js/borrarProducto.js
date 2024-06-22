const urlApi = "http://localhost/one_alurageek/productos";
async function borrarProducto(id) {
    return await fetch(`${urlApi}/${id}`,{
        method: "DELETE"
    });
}
export { borrarProducto }
