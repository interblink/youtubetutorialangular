//interfaces
export interface Usuario{
ID: number,
Nombre: String,
Apellido: String,
Nick: String,
Email: String,
Contrasena: String,
Tipo_user: Usertipo //este campo lo puse para enumerar los tipos de usuario
}
//Enumeraciones
export enum Usertipo{
    Administrador,
    Cliente,
    Tecnico
}

