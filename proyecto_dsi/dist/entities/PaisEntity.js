var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { ProvinciaEntity } from './ProvinciaEntity.js';
let PaisEntity = class PaisEntity {
    id;
    nombre;
    provincias;
};
__decorate([
    PrimaryColumn({ name: "id" }),
    __metadata("design:type", Number)
], PaisEntity.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], PaisEntity.prototype, "nombre", void 0);
__decorate([
    OneToMany(() => ProvinciaEntity, provincia => provincia.pais),
    __metadata("design:type", Array)
], PaisEntity.prototype, "provincias", void 0);
PaisEntity = __decorate([
    Entity("Pais")
], PaisEntity);
export { PaisEntity };
