// script.js
function searchProduct() {
    // Obtenir la valeur du champ de recherche
    const query = document.getElementById('searchBar').value.toLowerCase();
    
    // Obtenir tous les produits
    const products = document.getElementsByClassName('product');
    
    // Boucle sur tous les produits et vérifier si le nom correspond à la recherche
    for (let i = 0; i < products.length; i++) {
        const productName = products[i].getAttribute('data-name').toLowerCase();
        
        if (productName.includes(query)) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
}
