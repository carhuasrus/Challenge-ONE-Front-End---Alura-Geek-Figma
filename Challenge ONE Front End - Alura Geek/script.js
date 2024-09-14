// Lógica para agregar productos
const form = document.getElementById('product-form');
const productList = document.getElementById('product-list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    
    // Crear la tarjeta del producto
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>S/ ${price}</p>
        <button class="delete-btn">Eliminar</button>
    `;
    
    // Agregar la tarjeta al contenedor de productos
    productList.appendChild(productCard);
    
    // Limpiar el formulario
    form.reset();
    
    // Agregar funcionalidad para eliminar producto
    const deleteBtn = productCard.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        productCard.remove();
    });
});
