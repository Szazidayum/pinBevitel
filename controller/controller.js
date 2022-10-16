import Szam from "../view/gomb.js";

class GombController{
    #lista=[];
    constructor(){
        const szuloElem=$(".gombok");
        for (let index = 0; index < 10; index++) {
            const kocka = new Szam(index, szuloElem);
            this.#lista.push(kocka);
        }
        this.kever(this.#lista);
        szuloElem.html("");
        for (let index = 0; index < this.#lista.length; index++) {
            new Szam(this.#lista[index].getIndex(), szuloElem);
        }
        $(window).on("elemKattintas", (event) =>{
            /* console.log(event.detail); */
            /* inputba írás*/
            
       })
       $(".ujra").on("click", () => {
        this.kever(this.#lista);
        szuloElem.html("");
        for (let index = 0; index < this.#lista.length; index++) {
            new Szam(this.#lista[index].getIndex(), szuloElem);
        }
        $("#kiir").val('');
       });
      $(".konzolra").on("click", () =>{
        console.log($("#kiir").val());
      });

      $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){ 
            if($("#kozep").prop("checked")==true){
                $(".gombok").css(
                    'justify-content', 'space-around')
            } else if($("#kozep").prop("checked")==false){
                $(".gombok").css("justify-content","");
                $(".gombok").css(
                    'justify-content', 'first baseline')
            
          }});
        });
            /* $(".gombok").css({
                'justify-content': 'first baseline', */
      



    }

    kever(lista){
        let aktIndex = lista.length;
        let randomIndex;
        while(aktIndex != 0){
            randomIndex = Math.floor(Math.random()*aktIndex);
            aktIndex--;

            [lista[aktIndex], lista[randomIndex]] = [lista[randomIndex],lista[aktIndex]];
        }
        return lista
    };
}


export default GombController;

