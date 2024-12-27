var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column, ManyToOne, OneToMany, PrimaryColumn, JoinColumn } from 'typeorm';
import { BodegaEntity } from './BodegaEntity.js';
import { MaridajeEntity } from './MaridajeEntity.js';
import { ResenaEntity } from './ResenaEntity.js';
import { VarietalEntity } from './VarietalEntity.js';
let VinoEntity = class VinoEntity {
    id;
    nombre;
    anada;
    imagenEtiqueta;
    notaDeCataBodega;
    precioArs;
    bodega;
    maridajes;
    resenas;
    varietales;
};
__decorate([
    PrimaryColumn({ name: "id" }),
    __metadata("design:type", Number)
], VinoEntity.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], VinoEntity.prototype, "nombre", void 0);
__decorate([
    Column({ name: "anada" }),
    __metadata("design:type", Number)
], VinoEntity.prototype, "anada", void 0);
__decorate([
    Column({ name: "imagenEtiqueta" }),
    __metadata("design:type", String)
], VinoEntity.prototype, "imagenEtiqueta", void 0);
__decorate([
    Column({ name: "notaDeCataBodega" }),
    __metadata("design:type", String)
], VinoEntity.prototype, "notaDeCataBodega", void 0);
__decorate([
    Column({ name: "precioArs" }),
    __metadata("design:type", Number)
], VinoEntity.prototype, "precioArs", void 0);
__decorate([
    ManyToOne(() => BodegaEntity, bodega => bodega.vinos, { lazy: true }),
    JoinColumn({ name: "bodega_id" }),
    __metadata("design:type", Promise)
], VinoEntity.prototype, "bodega", void 0);
__decorate([
    OneToMany(() => MaridajeEntity, maridaje => maridaje.vino, { lazy: true }),
    __metadata("design:type", Promise)
], VinoEntity.prototype, "maridajes", void 0);
__decorate([
    OneToMany(() => ResenaEntity, resena => resena.vino, { lazy: true }),
    __metadata("design:type", Promise)
], VinoEntity.prototype, "resenas", void 0);
__decorate([
    OneToMany(() => VarietalEntity, varietal => varietal.vino, { lazy: true }),
    __metadata("design:type", Promise)
], VinoEntity.prototype, "varietales", void 0);
VinoEntity = __decorate([
    Entity("Vino")
], VinoEntity);
export { VinoEntity };
