import { Pato } from './Pato';
import { VoarComAsas } from '../ComportamentosVoar/VoarComAsas';
import { Chiar } from '../ComportamentosGrasnar/Chiar'

export class PatoAmarelo extends Pato {   
    exibir(): string {
        return "Exibindo pato amarelo";
    }
    constructor() {
        super();
        this.comportamentoVoar = new VoarComAsas();
        this.comportamentoGrasnar = new Chiar();
    }
    
    teste() {
        return 'teste';
    }
}