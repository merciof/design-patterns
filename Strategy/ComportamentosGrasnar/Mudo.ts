import { IComportamentoGrasnar } from "./IComportamentoGrasnar";

export class Mudo implements IComportamentoGrasnar {
    grasnar () {
        return 'Não emito sons.';
    }
}