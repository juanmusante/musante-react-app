import bobina1 from "../assets/img/bobina1.jpg";
import bobina2 from "../assets/img/bobina2.jpg";
import bobina3 from "../assets/img/bobina3.jpg";
import bobina4 from "../assets/img/bobina4.jpg";
import bobina5 from "../assets/img/bobina5.jpg";
import lapiz1 from "../assets/img/lapiz1.jpg";
import lapiz2 from "../assets/img/lapiz2.jpg";
import rotativa1 from "../assets/img/rotativa1.jpg";
import rotativa2 from "../assets/img/rotativa2.jpg";
import rotativa3 from "../assets/img/rotativa3.jpg";
import rotativa4 from "../assets/img/rotativa4.jpg";
import rotativa5 from "../assets/img/rotativa5.jpg";

const maquinas = [
    {
        id: 1,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "J4",
        precio: 10000,
        description: "Equipo robusto y liviano",
        stock: 22,
        img: rotativa1
    },
    {
        id: 2,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "Z4",
        precio: 9000,
        description: "Nuestra última incorporación",
        stock: 27,
        img: rotativa2
    },
    {
        id: 3,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "H0",
        precio: 7500,
        description: "Equipo de fibra de carbono",
        stock: 18,
        img: rotativa3
    },
    {
        id: 4,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "Esmeralda",
        precio: 12000,
        description: "Equipo tradicional y con estilo",
        stock: 23,
        img: bobina1
    },
    {
        id: 5,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "León",
        precio: 6000,
        description: "Equipo estilo naked",
        stock: 30,
        img: bobina2
    },
    {
        id: 6,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "Control",
        precio: 5000,
        description: "Equipo full black",
        stock: 14,
        img: bobina3
    },
    {
        id: 7,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "Dragón",
        precio: 4500,
        description: "Equipo tradicional con arte dragón",
        stock: 31,
        img: bobina4
    },
    {
        id: 8,
        tipo: "Bobina",
        categoryId: 2,
        modelo: "Elfo",
        precio: 8600,
        description: "Equipo tradicional con arte élfica",
        stock: 19,
        img: bobina5
    },
    {
        id: 9,
        tipo: "Lápiz",
        categoryId: 3,
        modelo: "B12",
        precio: 9800,
        description: "Nueva incorporación de máquina tipo lapiz",
        stock: 45,
        img: lapiz1
    },
    {
        id: 10,
        tipo: "Lápiz",
        categoryId: 3,
        modelo: "M11",
        precio: 13000,
        description: "Equipo con mayor robustez y zona de agarre",
        stock: 36,
        img: lapiz2
    },
    {
        id: 11,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "F2",
        precio: 6700,
        description: "Equipo liviano con estilo élfico",
        stock: 34,
        img: rotativa4
    },
    {
        id: 12,
        tipo: "Rotativa",
        categoryId: 1,
        modelo: "F5",
        precio: 9400,
        description: "Equipo liviano adaptable a distintas puntas",
        stock: 38,
        img: rotativa5
    }
];

export default maquinas;