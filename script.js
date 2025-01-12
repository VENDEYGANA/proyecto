function comprar(productoId, cantidad) {
    const compra = {
        productoId: productoId,
        cantidad: cantidad
    };

    fetch('http://localhost:3000/api/ventas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(compra)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Compra exitosa:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}