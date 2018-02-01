export interface Observador {
    atualizar (temperatura: number, humidade: number, pressao: number): void;
} 