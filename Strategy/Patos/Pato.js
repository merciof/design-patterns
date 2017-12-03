"use strict";
exports.__esModule = true;
var Pato = /** @class */ (function () {
    function Pato() {
    }
    Pato.prototype.nadar = function () {
        return 'Estou nadando!.';
    };
    Pato.prototype.executarGrasno = function () {
        return this.comportamentoGrasnar.grasnar();
    };
    Pato.prototype.executarVoo = function () {
        return this.comportamentoVoar.voar();
    };
    Pato.prototype.setComportamentoGrasnar = function (comportamentoGrasnar) {
        this.comportamentoGrasnar = comportamentoGrasnar;
    };
    Pato.prototype.setComportamentoVoar = function (comportamentoVoar) {
        this.comportamentoVoar = comportamentoVoar;
    };
    return Pato;
}());
exports.Pato = Pato;
