//CRUD
let endpointCategories = "http://localhost:3000/categories"
let endpointMovimientos = "http://localhost:3000/movimientos"


// crear un nuevo movimiento:
const formMovimientos = document.getElementById("form-movimiento")
let selectCategorias = formMovimientos.categoria

document.addEventListener("DOMContentLoaded", pintarCategorias)


formMovimientos.addEventListener("submit", function (event) {
    event.preventDefault()

    const newMovimiento = {
        tipo: formMovimientos.tipo.value,
        descripcion: formMovimientos.descripcion.value,
        importe: formMovimientos.importe.value,
        fecha: formMovimientos.fecha.value,
        categoriaId: formMovimientos.categoria.value,
    }

    crearUnNuevoMovimiento(newMovimiento)
    formMovimientos.reset()
})


// pintarCategorias
async function pintarCategorias() {
    selectCategorias.innerHTML = ""

    let response = await fetch(endpointCategories)
    let data = await response.json()

    if (data.length === 0) {
        selectCategorias.innerHTML += `
            <option disabled>Sin Categorias, por favor registre almenos una</option>
        `
    }

    data.forEach(categoria => {
        selectCategorias.innerHTML += `
            <option value="${categoria.id}">${categoria.nombre}</option>
        `
    });

}

async function crearUnNuevoMovimiento(newMovimiento) {

    let response = await fetch(endpointMovimientos,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(newMovimiento)
    })

    if (response.ok) {
        alert("movimiento guardado con exito")
    }
}








console.log(formMovimientos);
