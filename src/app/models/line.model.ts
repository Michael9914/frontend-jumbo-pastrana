import { ChampionModel } from "./champion.model";

export interface LineModel{
    id?: number;
    champion?: ChampionModel;
    email?: string;
    age?: number;
    identification?: string;
    names?: string;
}