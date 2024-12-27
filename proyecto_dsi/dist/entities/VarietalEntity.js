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
import { TipoUvaEntity } from './TipoUvaEntity.js';
import { VinoEntity } from './VinoEntity.js';
let VarietalEntity = class VarietalEntity {
    id;
    descripcion;
    porcentajeComposicion;
    tipoUva;
    vino;
};
__decorate([
    PrimaryGeneratedColumn({ name: "id" }),
    __metadata("design:type", Number)
], VarietalEntity.prototype, "id", void 0);
__decorate([
    Column({ name: "descripcion" }),
    __metadata("design:type", String)
], VarietalEntity.prototype, "descripcion", void 0);
__decorate([
    Column({ name: "porcentajeComposicion" }),
    __metadata("design:type", Number)
], VarietalEntity.prototype, "porcentajeComposicion", void 0);
__decorate([
    ManyToOne(() => TipoUvaEntity, tipoUva => tipoUva.varietales),
    JoinColumn({ name: "tipo_uva_id" }),
    __metadata("design:type", TipoUvaEntity)
], VarietalEntity.prototype, "tipoUva", void 0);
__decorate([
    ManyToOne(() => VinoEntity, vino => vino.varietales, { lazy: true }),
    JoinColumn({ name: "vino_id" }),
    __metadata("design:type", Promise)
], VarietalEntity.prototype, "vino", void 0);
VarietalEntity = __decorate([
    Entity("Varietal")
], VarietalEntity);
export { VarietalEntity };
