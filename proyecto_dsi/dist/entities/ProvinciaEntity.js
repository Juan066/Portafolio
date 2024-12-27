var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { PaisEntity } from './PaisEntity.js';
import { RegionVitivinicolaEntity } from './RegionVitivinicolaEntity.js';
let ProvinciaEntity = class ProvinciaEntity {
    id;
    nombre;
    pais;
    regionesVitivinicolas;
};
__decorate([
    PrimaryGeneratedColumn({ name: "id" }),
    __metadata("design:type", Number)
], ProvinciaEntity.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], ProvinciaEntity.prototype, "nombre", void 0);
__decorate([
    ManyToOne(() => PaisEntity, pais => pais.provincias),
    JoinColumn({ name: "pais_id" }),
    __metadata("design:type", PaisEntity)
], ProvinciaEntity.prototype, "pais", void 0);
__decorate([
    OneToMany(() => RegionVitivinicolaEntity, region => region.provincia),
    __metadata("design:type", Array)
], ProvinciaEntity.prototype, "regionesVitivinicolas", void 0);
ProvinciaEntity = __decorate([
    Entity("Provincia")
], ProvinciaEntity);
export { ProvinciaEntity };
