import {DadosTempo} from './DadosTempo';
import { Observador } from "./Observador";
import { ElementoDisplay } from "./ElementoDisplay"

class DisplayPrevisao implements Observador, ElementoDisplay {
    
    private pressaoAtual: number = 29.92;
    private ultimaPressao: number;
    private dadosTempo: DadosTempo;


	constructor($dadosTempo: DadosTempo) {
		this.dadosTempo = $dadosTempo;
        this.dadosTempo.registrarObservador(this);
    }
    
    display(): void {
        console.log('Previsao ');
        if (this.pressaoAtual > this.ultimaPressao) {
            console.log('Aumento de pressao.');            
        } else if(this.pressaoAtual == this.ultimaPressao) {
            console.log('Pressao igual.');            
        } else {
            console.log('Reducao de pressao');  
        }
        
    }
    atualizar(temperatura: number, humidade: number, pressao: number): void {
        this.ultimaPressao = this.pressaoAtual;
        this.pressaoAtual = pressao;
        this.display();
    }
}