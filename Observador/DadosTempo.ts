import {Sujeito} from './Sujeito';
import {Observador} from './Observador';

export class DadosTempo implements Sujeito {
    
    private temperatura: number;
    private humidade: number;
    private pressao: number;
    private Observadores: Array<Observador>;

    registrarObservador(o: Observador): void {
        this.Observadores.push(o);
    }
    
    removerObservador(o: Observador): void {
        let i: number = this.Observadores.indexOf(o);
        if (i > -1) {
            this.Observadores.splice(i, 1);
        }
    }
    
    notificarObservadores(): void {
        for (let i = 0; i < this.Observadores.length; i++) {           
            let observador: Observador = this.Observadores[i];
            observador.atualizar(this.temperatura, this.humidade, this.pressao);
        }
    }

    medidasAtualizadas(): void {
        this.notificarObservadores();
    }

    setarMedidas(temperatura: number, humidade: number, pressao: number): void {
        this.temperatura = temperatura;
        this.humidade = humidade;
        this.pressao = pressao;
        this.medidasAtualizadas();
    }
    
    
    public get $temperatura(): number {
		return this.temperatura;
	}
    

	public get $humidade(): number {
		return this.humidade;
	}
    

	public get $pressao(): number {
		return this.pressao;
	}
}