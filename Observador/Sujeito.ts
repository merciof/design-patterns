import { Observador } from "./Observador";

export interface Sujeito {
    registrarObservador(o: Observador): void;
    removerObservador(o: Observador): void;
    notificarObservadores(): void;
}