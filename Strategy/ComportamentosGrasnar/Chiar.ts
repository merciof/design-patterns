import { IComportamentoGrasnar } from "./IComportamentoGrasnar";

export  class Chiar implements IComportamentoGrasnar {
    grasnar () {
        return "Estou chiando.";
    }
}