import { IComportamentoVoar } from "./IComportamentoVoar";

export class VoarComAsas implements IComportamentoVoar {
    voar () {
        return "Estou voando com asas."
    }
}