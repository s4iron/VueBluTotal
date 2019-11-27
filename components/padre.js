Vue.component('padre',{//el siguiente comentario html habilita la extencion es 6-string html
    template://html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Papa papa at Yue: {{numeroPadre}}</h2>
        <hijo :numero =numeroPadre ></hijo>
        <button class="btn btn-ganger" @click="numeroPadre++">no tenemos pa darle comida</button>
    </div>
    `,
    data(){
        return{
            numeroPadre:0
        }
    }
})