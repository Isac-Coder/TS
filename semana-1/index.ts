type Tclan = "TypeScript AM" | "Node Nest AM" | "Node Nest PM" | "C# .Net PM" | "Java + Springboot"

type Usala = "norte" | "sur" | "este" | "oeste"

interface ICoder{
    firstname: string;
    lastname: string;
    email: string;
    identification: string;
    clan: Tclan;
    birthday?: Date;
    phoneNumber?: string;
    sala: Usala;
};

const coder: ICoder = {
    firstname: 'Mohamed',
    lastname: 'Ali',
    email: 'mohamed@gmail.com',
    identification: '1115638759',
    clan: "Node Nest AM",
    sala: "este"
};

interface Iclan{
    idClan: number,
    nombreClan: string,
    horario: "mañana" | "tarde",
    coder: string
}

console.log(coder);
