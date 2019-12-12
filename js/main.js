console.log('hello koders')

const alumnos = [
    {
        'nombre': 'Juan Perez',
        'calificacion': [
            {
            'español' : 10,
            'matematicas' : 8,
            }
        ],
        'promedio': 9
    },
    {
        'nombre': 'Ernesto Lopez',
        'calificacion': [
            {
            'español' : 10,
            'matematicas' : 10,
            }
        ],
        'promedio': 10


    },
    {
        'nombre': 'Erick Huerta',
        'calificacion': [
            {
            'español' : 6,
            'matematicas' : 9,
            }
        ],
        'promedio': 7.5


    },
    {
        'nombre': 'Lucia Vela',
        'calificacion': [
            {
            'español' : 8,
            'matematicas' : 9,
            }
        ],
        'promedio': 8.5


    },
]



const promedioGeneral = promedio => promedio.reduce ((a,b)=> (a + b.promedio, 0)/alumnos.length)





//console.log(promedioGeneral)