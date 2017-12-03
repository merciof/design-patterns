import { IComportamentoGrasnar } from "./IComportamentoGrasnar";

export class Grasnar implements IComportamentoGrasnar {
    grasnar () {
        return "Estou grasnando.";
    }
}