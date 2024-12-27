var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TipoUva } from './TipoUva.js';
import { Vino } from './Vino.js';
let Varietal = class Varietal {
    id;
    descripcion;
    porcentajeComposicion;
    tipoUva;
    // @OneToOne(() => Vino)
    // @ManyToOne(() => Vino, vino=> vino.varietales)
    // @JoinColumn({ name: "vino_id"}) 
    // vino: Vino;
    vino;
};
__decorate([
    PrimaryGeneratedColumn({ name: "id" }),
    __metadata("design:type", Number)
], Varietal.prototype, "id", void 0);
__decorate([
    Column({ name: "descripcion" }),
    __metadata("design:type", String)
], Varietal.prototype, "descripcion", void 0);
__decorate([
    Column({ name: "porcentajeComposicion" }),
    __metadata("design:type", Number)
], Varietal.prototype, "porcentajeComposicion", void 0);
__decorate([
    ManyToOne(() => TipoUva, tipoUva => tipoUva.varietales),
    JoinColumn({ name: "tipo_uva_id" }),
    __metadata("design:type", TipoUva)
], Varietal.prototype, "tipoUva", void 0);
__decorate([
    ManyToOne(() => Vino, vino => vino.varietales, { lazy: true }),
    JoinColumn({ name: "vino_id" }),
    __metadata("design:type", Promise)
], Varietal.prototype, "vino", void 0);
Varietal = __decorate([
    Entity()
], Varietal);
export { Varietal };
