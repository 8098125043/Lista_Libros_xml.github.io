document.addEventListener("DOMContentLoaded", function () {

    const booksContainer = document.getElementById("books-container");

    // Carge el archivo xml
    fetch("libros.xml")
        .then(response => response.text())
        .then(data => {
            // Converti el texto XML a un objeto DOM
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
            // Obtener la lista  de los  libro
            const books = xmlDoc.getElementsByTagName("book");

            // con esto aumento  cada uno
            for (let i = 0; i < books.length; i++) {
                const title = books[i].getElementsByTagName("title")[0].textContent;
                const author = books[i].getElementsByTagName("author")[0].textContent;
                const year = books[i].getElementsByTagName("year")[0].textContent;

                // Cree los  elementos HTML para mostrar la información del libro
                const bookDiv = document.createElement("div");
                bookDiv.classList.add("book");

                const titleHeading = document.createElement("h2");
                titleHeading.textContent = title;

                const authorPara = document.createElement("p");
                authorPara.textContent = `Autor: ${author}`;

                const yearPara = document.createElement("p");
                yearPara.textContent = `Año de lanzamiento: ${year}`;

                // Agrege elementos al contenedor de libros
                bookDiv.appendChild(titleHeading);
                bookDiv.appendChild(authorPara);
                bookDiv.appendChild(yearPara);
                booksContainer.appendChild(bookDiv);
            }
        })
        .catch(error => console.error("Error al cargar el archivo XML:", error));
});
