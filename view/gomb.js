class Szam{
    #index
    constructor(index, szuloElem){
        this.#index = index
        const gomb=`<div class="gomb"><p>${index}</p></div>`;
        szuloElem.append(gomb);
        this.divGomb = szuloElem.children("div:last-child");
        const text = $("#kiir");
        let hossz=0;
     /*    if(hossz<=4){ */
        this.divGomb.on("click", () => {
            this.kattintas();
            text.val(text.val()+index);
           /*  hossz++;  */ 
        })
       /*  else{
            this.divGomb.removeClass("off");
        } */
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
