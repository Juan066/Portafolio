var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Varietal } from './Varietal.js';
let TipoUva = class TipoUva {
    id;
    nombre;
    descripcion;
    varietales;
};
__decorate([
    PrimaryGeneratedColumn({ name: "id" }),
    __metadata("design:type", Number)
], TipoUva.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], TipoUva.prototype, "nombre", void 0);
__decorate([
    Column({ name: "descripcion" }),
    __metadata("design:type", String)
], TipoUva.prototype, "descripcion", void 0);
__decorate([
    OneToMany(() => Varietal, varietal => varietal.tipoUva),
    __metadata("design:type", Array)
], TipoUva.prototype, "varietales", void 0);
TipoUva = __decorate([
    Entity("TipoUva")
], TipoUva);
export { TipoUva };
