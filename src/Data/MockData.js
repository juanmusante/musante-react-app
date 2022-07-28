const maquinas = [
    {
        id: 0,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "J4",
        precio: 10000,
        description: "Equipo robusto y liviano",
        stock: 22,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/rotativa1.jpg?alt=media&token=96a2ad74-05bd-4ceb-b0c3-0bfe7b24f072'
        ]
    },
    {
        id: 1,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "Z4",
        precio: 9000,
        description: "Nuestra última incorporación",
        stock: 27,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/rotativa2.jpg?alt=media&token=e1b9b57f-a35c-4741-9df6-57ff11e7ceb3'
        ]
    },
    {
        id: 2,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "H0",
        precio: 7500,
        description: "Equipo de fibra de carbono",
        stock: 18,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/rotativa3.jpg?alt=media&token=2eedd3b7-e02e-4270-a2ea-6aff764b2d05'
        ]
    },
    {
        id: 3,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "Esmeralda",
        precio: 12000,
        description: "Equipo tradicional y con estilo",
        stock: 23,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/bobina1.jpg?alt=media&token=9b5d1911-d02f-420d-ab89-65f272be6477'
        ]
    },
    {
        id: 4,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "León",
        precio: 6000,
        description: "Equipo estilo naked",
        stock: 30,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/bobina2.jpg?alt=media&token=3981e435-6a50-4913-a7b3-8cd0fd5172b5'
        ]
    },
    {
        id: 5,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "Control",
        precio: 5000,
        description: "Equipo full black",
        stock: 14,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/bobina3.jpg?alt=media&token=4c2b2593-8444-4d76-944b-47314ee60b21'
        ]
    },
    {
        id: 6,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "Dragón",
        precio: 4500,
        description: "Equipo tradicional con arte dragón",
        stock: 31,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/bobina4.jpg?alt=media&token=f63f4a47-f7ca-431c-8773-45e0512d7e59'
        ]
    },
    {
        id: 7,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "Elfo",
        precio: 8600,
        description: "Equipo tradicional con arte élfica",
        stock: 19,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/bobina5.jpg?alt=media&token=e309e9c6-45e2-412a-95a4-839e8a16a65d'
        ]
    },
    {
        id: 8,
        tipo: "Lápiz",
        categoryId: 3,
        modelo: "B12",
        precio: 9800,
        description: "Nueva incorporación de máquina tipo lapiz",
        stock: 45,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/lapiz1.jpg?alt=media&token=280b40c6-d471-4238-ac20-804131e543ee'
        ]
    },
    {
        id: 9,
        tipo: "Lápiz",
        categoryId: 3,
        modelo: "M11",
        precio: 13000,
        description: "Equipo con mayor robustez y zona de agarre",
        stock: 36,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/lapiz2.jpg?alt=media&token=035b4c9a-05e4-4136-8fe1-c61ff8eb718c'
        ]
    },
    {
        id: 10,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "F2",
        precio: 6700,
        description: "Equipo liviano con estilo gótico",
        stock: 34,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/rotativa4.jpg?alt=media&token=65cdfc7a-115e-4cbb-9b91-b9d279493023'
        ]
    },
    {
        id: 11,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "F5",
        precio: 9400,
        description: "Equipo liviano adaptable a distintas puntas",
        stock: 38,
        img: [
            'https://firebasestorage.googleapis.com/v0/b/musante-react-app.appspot.com/o/rotativa5.jpg?alt=media&token=1e44f9e1-32de-489c-800d-98051ee5def6'
        ]
    }
];

export default maquinas;