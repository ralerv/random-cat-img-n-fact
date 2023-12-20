function esVisible(entries,observer){
    let intersecciones = entries.filter((entry)=> entry.isIntersecting)
    intersecciones.forEach(entry => {
        const container = entry.target
        const img = container.firstChild
        img.addEventListener("load",isLoaded)
        img.src=img.dataset.src
        observer.unobserve(container)
    });
}

function isLoaded(event){
    let imagen = event.target
    let contenedor = imagen.parentNode
    if(imagen.complete && imagen.naturalHeight !== 0){
        contenedor.classList.remove("w-full")
        contenedor.classList.add("h-auto")
        contenedor.style.width="auto"
        imagen.removeEventListener("load",isLoaded)
    }
}

const options= {}
export const observer = new IntersectionObserver(esVisible,options);
