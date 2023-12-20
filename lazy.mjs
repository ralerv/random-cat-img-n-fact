function esVisible(entries,observer){
    let intersecciones = entries.filter((entry)=> entry.isIntersecting)
    intersecciones.forEach(entry => {
        const container = entry.target
        const img = container.firstChild
        img.src=img.dataset.src
        observer.unobserve(container)
    });
}

const options= {}
export const observer = new IntersectionObserver(esVisible,options);
