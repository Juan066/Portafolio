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
import { Bodega } from './Bodega.js';
import { Maridaje } from './Maridaje.js';
import { Resena } from './Resena.js';
import { Varietal } from './Varietal.js';
let Vino = class Vino {
    // @PrimaryGeneratedColumn()
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
], Vino.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], Vino.prototype, "nombre", void 0);
__decorate([
    Column({ name: "anada" }),
    __metadata("design:type", Number)
], Vino.prototype, "anada", void 0);
__decorate([
    Column({ name: "imagenEtiqueta" }),
    __metadata("design:type", String)
], Vino.prototype, "imagenEtiqueta", void 0);
__decorate([
    Column({ name: "notaDeCataBodega" }),
    __metadata("design:type", String)
], Vino.prototype, "notaDeCataBodega", void 0);
__decorate([
    Column({ name: "precioArs" }),
    __metadata("design:type", Number)
], Vino.prototype, "precioArs", void 0);
__decorate([
    ManyToOne(() => Bodega, bodega => bodega.vinos, { lazy: true }),
    JoinColumn({ name: "bodega_id" }),
    __metadata("design:type", Promise)
], Vino.prototype, "bodega", void 0);
__decorate([
    OneToMany(() => Maridaje, maridaje => maridaje.vino, { lazy: true }),
    __metadata("design:type", Promise)
], Vino.prototype, "maridajes", void 0);
__decorate([
    OneToMany(() => Resena, resena => resena.vino, { lazy: true }),
    __metadata("design:type", Promise)
], Vino.prototype, "resenas", void 0);
__decorate([
    OneToMany(() => Varietal, varietal => varietal.vino, { lazy: true }),
    __metadata("design:type", Promise)
], Vino.prototype, "varietales", void 0);
Vino = __decorate([
    Entity()
], Vino);
export { Vino };