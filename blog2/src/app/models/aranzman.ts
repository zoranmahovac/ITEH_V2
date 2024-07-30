import { Agencija } from "./agencija";
import { User } from "./user";


export interface Aranzman {
    id: number,
    cena:number,
    br_mesta:number,
    datum:Date,
    prevoz: string,
    destinacija: string,
    user: User,
    agencija: Agencija,
    picture: string,
}
