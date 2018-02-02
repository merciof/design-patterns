import {DadosTempo} from './DadosTempo';
import {Observador} from './Observador';
import { ElementoDisplay } from './ElementoDisplay';

export class DisplayCondicoesAtuais implements Observador, ElementoDisplay {
    private temperatura: number;
    private humidade: number;
    private dadosTempo: DadosTempo;
     

	constructor($dadosTempo: DadosTempo) {
		this.dadosTempo = $dadosTempo;
        this.dadosTempo.registrarObservador(this);
    }
    
    atualizar(temperatura: number, humidade: number, pressao: number): void {
        this.temperatura = temperatura;
        this.humidade = humidade;
        this.display();
    }

    display(): void {
        console.log('Condicoes atuais, temperatura: ' + this.temperatura + 
        'Humidade: ' + this.humidade);
        
    }
}