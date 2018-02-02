import {DadosTempo} from './DadosTempo';
import {ElementoDisplay} from './ElementoDisplay';
import {Observador} from './Observador';

export class DisplayEstatisticas implements Observador, ElementoDisplay {
    
    private tempMax: number = 0.0;
    private tempMin: number = 200; 
    private somaTemp: number = 0.0;
    private numLeituras: number;
    private dadosTempo: DadosTempo;
    

	constructor($dadosTempo: DadosTempo) {
		this.dadosTempo = $dadosTempo;
        this.dadosTempo.registrarObservador(this);
    }
    

    atualizar(temperatura: number, humidade: number, pressao: number): void {
        this.somaTemp += temperatura;
        this.numLeituras++;

        if(temperatura > this.tempMax) {
            this.tempMax = temperatura;
        }

        if (temperatura < this.tempMin) {
            this.tempMin = temperatura;
        }
        
        this.display();  
    }

    display(): void {
        console.log('Temperatura maxima: ' + this.tempMax +
        'Temperatura minima: ' + this.tempMin + 'Temperatura media: ' +
        this.somaTemp/this.numLeituras);
        
    }
}