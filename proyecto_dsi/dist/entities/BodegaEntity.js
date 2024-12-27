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
import { RegionVitivinicolaEntity } from './RegionVitivinicolaEntity.js';
import { VinoEntity } from './VinoEntity.js';
let BodegaEntity = class BodegaEntity {
    id;
    nombre;
    descripcion;
    historia;
    coordenadasUbicacion;
    periodoActualizacion;
    regionVitivinicola;
    vinos;
};
__decorate([
    PrimaryGeneratedColumn({ name: "id" }),
    __metadata("design:type", Number)
], BodegaEntity.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], BodegaEntity.prototype, "nombre", void 0);
__decorate([
    Column({ name: "descripcion" }),
    __metadata("design:type", String)
], BodegaEntity.prototype, "descripcion", void 0);
__decorate([
    Column({ name: "historia" }),
    __metadata("design:type", String)
], BodegaEntity.prototype, "historia", void 0);
__decorate([
    Column({ name: "coordenadasUbicacion" }),
    __metadata("design:type", String)
], BodegaEntity.prototype, "coordenadasUbicacion", void 0);
__decorate([
    Column({ name: "periodoActualizacion" }),
    __metadata("design:type", String)
], BodegaEntity.prototype, "periodoActualizacion", void 0);
__decorate([
    ManyToOne(() => RegionVitivinicolaEntity, (region) => region.bodega),
    JoinColumn({ name: "region_id" }),
    __metadata("design:type", RegionVitivinicolaEntity)
], BodegaEntity.prototype, "regionVitivinicola", void 0);
__decorate([
    OneToMany(() => VinoEntity, vino => vino.bodega),
    __metadata("design:type", Array)
], BodegaEntity.prototype, "vinos", void 0);
BodegaEntity = __decorate([
    Entity("Bodega")
], BodegaEntity);
export { BodegaEntity };
