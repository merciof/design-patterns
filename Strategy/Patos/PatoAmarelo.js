"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pato_1 = require("./Pato");
var VoarComAsas_1 = require("../ComportamentosVoar/VoarComAsas");
var Chiar_1 = require("../ComportamentosGrasnar/Chiar");
var PatoAmarelo = /** @class */ (function (_super) {
    __extends(PatoAmarelo, _super);
    function PatoAmarelo() {
        var _this = _super.call(this) || this;
        _this.comportamentoVoar = new VoarComAsas_1.VoarComAsas();
        _this.comportamentoGrasnar = new Chiar_1.Chiar();
        return _this;
    }
    PatoAmarelo.prototype.exibir = function () {
        return "Exibindo pato amarelo";
    };
    PatoAmarelo.prototype.teste = function () {
        return 'teste';
    };
    return PatoAmarelo;
}(Pato_1.Pato));
exports.PatoAmarelo = PatoAmarelo;
