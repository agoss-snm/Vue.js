var app = new Vue({
    el: '#app',
    data: {
        contador: 0,
    },
    methods:{
        sumar(){
            return(this.contador++)
        },

        restar(){
            return(this.contador--)
        }
       
    },
    computed: {
     
    }
})