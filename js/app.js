Vue.component('navbarr',{
    template: `
    <nav>
        <ul> 
            <li>Inicio</li>
            <li>Info</li>
        </ul>
        </nav>
    `
})

Vue.component('titlee',{
    template: `
    <h1>Tabla</h1>
    `
}),

Vue.component('tabla',{
    props:['alumnos'],
    template:`
    <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Edad</td>
                        <td>Nota</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in alumnos" :key="i" :class='{"aprobado":item.nota>=7, "desaprobado":item.nota<7} '>
                        <td>{{item.nombre}}</td>
                        <td>{{item.apellido}}</td>
                        <td>{{item.edad}}</td>
                        <td>{{item.nota}}</td>
                    </tr>
                </tbody>
            </table>

    `
})



var app = new Vue({
    el: '#app',
    data: {
        alumnos:[
            {
                'nombre': 'Jose',
                'apellido': 'Piccioni',
                'edad': '39',
                'nota': '7'
            },
            {
                'nombre': 'Fernando',
                'apellido': 'Rivero',
                'edad': '30',
                'nota': '3'
            },
            {
                'nombre': 'Gissella',
                'apellido': 'Gastin',
                'edad': '32',
                'nota': '10'
            },
        ],

        menu:{
            inicio:'Inicio',
            info:'Info',
        }
    },
    methods:{
        sumar(){
            return(this.contador++)
        },

        restar(){
            return(this.contador--)
        },

       cambiarValor(){
         this.awasome = !this.awasome
       }
    },
    computed: {
    }
})