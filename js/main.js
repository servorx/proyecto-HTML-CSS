const clotheList = [
    "Tea Dress",
    "Pinafore Dress",
    "Swing Dress",
    "Shirtwaist Dress",
    "Peplum Dress",
    "Tweed Dress",
    "Flapper Dress",
    "Gingham Dress",
    "Puff Sleeve Blouse",
    "Peter Pan Collar Blouse",
    "Lace Blouse",
    "Victorian Blouse",
    "Gibson Girl Blouse",
    "Bow-Tie Blouse",
    "Edwardian Blouse",
    "Silk Blouse",
    "High-Waisted Trousers",
    "Wide-Leg Pants",
    "Culottes",
    "Pleated Skirt",
    "A-Line Skirt",
    "Circle Skirt",
    "Pencil Skirt",
    "Tartan Skirt",
    "Swing Coat",
    "Trench Coat",
    "Cape Coat",
    "Faux Fur Coat",
    "Bolero Jacket",
    "Cardigan Sweater",
    "Twin Set",
    "Cable Knit Sweater",
    "Beret Hat",
    "Cloche Hat",
    "Pillbox Hat",
    "Fascinator",
    "Cat Eye Sunglasses",
    "Round Frame Glasses",
    "Pearl Necklace",
    "Charm Bracelet",
    "Brooch",
    "Silk Scarf",
    "Lace Gloves",
    "Satin Gloves",
    "Oxford Shoes",
    "Mary Jane Shoes",
    "T-Strap Heels",
    "Kitten Heels",
    "Saddle Shoes",
    "Vintage Handbag",
    "Beaded Purse",
    "Crochet Bag",
    "Straw Handbag",
    "Bustier Top",
    "Corset Top",
    "Petticoat",
    "Stockings",
    "Seamed Tights",
    "Vintage Lingerie",
    "Ruffled Bloomers",
    "Apron Dress",
    "Modern light Clothes",
    "Light Dress Bless",
    "Midnight Edge Faux Leather Jacket",
    "Golden Glow Wrap Dress",
]; 
// esta es la lista que se expresa para la barra de busqueda creando un array


// se obtienen referencias de resultado y la barra de busqueda a traves del query(no se que es eso)
const resultBox = document.querySelector(".results");
const inputBox = document.querySelector(".search-bar");

// se toma un array de los resultados filtrados y genera una lisa para mostrarlos, cada <li> tiene un onlick que le permite autocompletarse a si mismo 
const displayResults = function (result) {
    const resultHTML = result.map(function (clothe) {
        return `<li onclick="selectInput(this)">${clothe}</li>`;
    });

    resultBox.innerHTML = "<ul>" + resultHTML.join("") + "</ul>";
};

// es una funcion que sucede cuando un usuario empieza a escribir en la barra de busqeuda, convierte el texto a minmusculas para evitar problemas, si el campo de entrada esta vacio, no muestra nada, si hay texto, filtra la lista de prendas, y al final llama a displayResults para mostrar la lista filtrada
inputBox.onkeyup = function (e) {
    let result = [];
    const input = inputBox.value.toLowerCase();

    if (input.length === 0) {
        resultBox.innerHTML = "";
        return;
    }

    result = clotheList.filter((clothe) =>
        clothe.toLowerCase().includes(input)
    );

    displayResults(result);
};

// funcion para seleccionar una prenda, cuando se hace click, se coloca en la barra de busqueda y luego, los resultados desaparecen.
function selectInput(clothe) {
    inputBox.value = clothe.innerText;
    resultBox.innerHTML = "";
}
