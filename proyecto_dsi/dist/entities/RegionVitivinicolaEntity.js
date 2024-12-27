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
import { ProvinciaEntity } from './ProvinciaEntity.js';
import { BodegaEntity } from './BodegaEntity.js';
let RegionVitivinicolaEntity = class RegionVitivinicolaEntity {
    id;
    nombre;
    descripcion;
    provincia;
    bodega;
};
__decorate([
    PrimaryGeneratedColumn({ name: "id" }),
    __metadata("design:type", Number)
], RegionVitivinicolaEntity.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], RegionVitivinicolaEntity.prototype, "nombre", void 0);
__decorate([
    Column({ name: "descripcion" }),
    __metadata("design:type", String)
], RegionVitivinicolaEntity.prototype, "descripcion", void 0);
__decorate([
    ManyToOne(() => ProvinciaEntity, provincia => provincia.regionesVitivinicolas),
    JoinColumn({ name: "provincia_id" }),
    __metadata("design:type", ProvinciaEntity)
], RegionVitivinicolaEntity.prototype, "provincia", void 0);
__decorate([
    OneToMany(() => BodegaEntity, (bodega) => bodega.regionVitivinicola),
    __metadata("design:type", Array)
], RegionVitivinicolaEntity.prototype, "bodega", void 0);
RegionVitivinicolaEntity = __decorate([
    Entity("RegionVitivinicola")
], RegionVitivinicolaEntity);
export { RegionVitivinicolaEntity };
