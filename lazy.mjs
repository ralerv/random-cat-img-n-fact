function esVisible(entries,observer){
    let intersecciones = entries.filter((entry)=> entry.isIntersecting)
    intersecciones.forEach(entry => {
        console.log("hola")
        observer.unobserve(entry.target)
    });
}

const options= {}
export const observer = new IntersectionObserver(esVisible,options);
