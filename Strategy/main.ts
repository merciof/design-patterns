import { PatoAmarelo } from "./Patos/PatoAmarelo";
import { Pato } from "./Patos/Pato";
import { Grasnar } from "./ComportamentosGrasnar/Grasnar";
import { NaoVoa } from "./ComportamentosVoar/NaoVoa";

let patoAmarelo: Pato = new PatoAmarelo();
   
console.log(patoAmarelo.exibir());
console.log(patoAmarelo.executarGrasno());
console.log(patoAmarelo.executarVoo());
patoAmarelo.setComportamentoGrasnar(new Grasnar());
patoAmarelo.setComportamentoVoar(new NaoVoa());
console.log(patoAmarelo.executarGrasno());
console.log(patoAmarelo.executarVoo());



