import { Observador } from "./Observador";
import { ElementoDisplay } from "./ElementoDisplay"

class DisplayPrevisao implements Observador, ElementoDisplay {
    
    pressaoAtual: number;
    ultimaPressao: number;
    
    update(): void {
        throw new Error("Method not implemented.");
    }
    atualizar(temperatura: number, humidade: number, pressao: number): void {
        throw new Error("Method not implemented.");
    }
    
}