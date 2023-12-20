function esVisible(entries,observer){
    let intersecciones = entries.filter((entry)=> entry.isIntersecting)
    intersecciones.forEach(entry => {
        const container = entry.target
        const img = container.firstChild
        img.src=img.dataset.src

        img.addEventListener("load", (event)=>{
            if(img.complete && img.naturalHeight !== 0){
                container.classList.remove("w-full")
                container.classList.add("h-auto")
                container.style.width="auto"
            }
        })
        img.removeEventListener("load", (event)=>{
            if(img.complete && img.naturalHeight !== 0){
                container.classList.remove("w-full")
                container.classList.add("h-auto")
                container.style.width="auto"
            }
        })
        observer.unobserve(container)
    });
}



const options= {}
export const observer = new IntersectionObserver(esVisible,options);
