class Szam{
    #index
    constructor(index, szuloElem){
        this.#index = index
        const gomb=`<div class="gomb"><p>${index}</p></div>`;
        szuloElem.append(gomb);
        this.divGomb = szuloElem.children("div:last-child");
        this.divGomb.on("click", () => {
            this.kattintas();
        })
    }
    
    getIndex(){
        return this.#index;
    }

    kattintas(){
        let event = new CustomEvent("elemKattintas",{detail:this.#index})
        window.dispatchEvent(event);
}
}

export default Szam;
