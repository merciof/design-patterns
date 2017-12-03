import { IComportamentoVoar } from "./IComportamentoVoar";

export class NaoVoa implements IComportamentoVoar {
    voar () {
        return "So incapaz de voar.";
    }
}