import { IComportamentoVoar } from "../ComportamentosVoar/IComportamentoVoar";
import { IComportamentoGrasnar } from "../ComportamentosGrasnar/IComportamentoGrasnar";

export abstract class Pato {
    comportamentoVoar: IComportamentoVoar;
    comportamentoGrasnar: IComportamentoGrasnar;

    abstract exibir(): string;
    
    nadar(): string {
        return 'Estou nadando!.';
    } 
    executarGrasno(): string {
        return this.comportamentoGrasnar.grasnar();
    }
    executarVoo(): string {
        return this.comportamentoVoar.voar();
    }
    
    setComportamentoGrasnar(comportamentoGrasnar: IComportamentoGrasnar): void {
        this.comportamentoGrasnar = comportamentoGrasnar;
    } 

    setComportamentoVoar(comportamentoVoar: IComportamentoVoar): void {
        this.comportamentoVoar = comportamentoVoar;
    }
}