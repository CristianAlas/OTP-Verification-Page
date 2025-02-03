let input = [...document.querySelectorAll('input')];
console.log(input);
input.forEach((element) => {
    element.addEventListener('keyup', () => {
        if(input.indexOf(element)+1 != input.length){
            input[input.indexOf(element) + 1].focus()
        }
    })
});

function redirectToPage() {
    window.location.href = "404.html"; // Cambia "newpage.html" por la URL de la página a la que quieres redirigir
}