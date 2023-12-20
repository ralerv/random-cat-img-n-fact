function esVisible(entries,observer){
    let intersecciones = entries.filter((entry)=> entry.isIntersecting)
    intersecciones.forEach(entry => {
        const container = entry.target
        const img = container.firstChild
        img.src=img.dataset.src

        img.addEventListener("load", (event)=>{
            if(img.complete && img.naturalHeight !== 0){
                container.classList.add("sm-w-auto","h-auto")
                container.classList.remove("w-full")
            }
        })
        img.removeEventListener("load", (event)=>{
            if(img.complete && img.naturalHeight !== 0){
                container.classList.add("sm-w-auto","h-auto")
                container.classList.remove("w-full")
            }
        })
        observer.unobserve(container)
    });
}



const options= {}
export const observer = new IntersectionObserver(esVisible,options);
