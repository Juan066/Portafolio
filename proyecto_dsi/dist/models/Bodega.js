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
import { RegionVitivinicola } from './RegionVitivinicola.js';
import { Vino } from './Vino.js';
let Bodega = class Bodega {
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
], Bodega.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], Bodega.prototype, "nombre", void 0);
__decorate([
    Column({ name: "descripcion" }),
    __metadata("design:type", String)
], Bodega.prototype, "descripcion", void 0);
__decorate([
    Column({ name: "historia" }),
    __metadata("design:type", String)
], Bodega.prototype, "historia", void 0);
__decorate([
    Column({ name: "coordenadasUbicacion" }),
    __metadata("design:type", String)
], Bodega.prototype, "coordenadasUbicacion", void 0);
__decorate([
    Column({ name: "periodoActualizacion" }),
    __metadata("design:type", String)
], Bodega.prototype, "periodoActualizacion", void 0);
__decorate([
    ManyToOne(() => RegionVitivinicola, (region) => region.bodega),
    JoinColumn({ name: "region_id" }),
    __metadata("design:type", RegionVitivinicola)
], Bodega.prototype, "regionVitivinicola", void 0);
__decorate([
    OneToMany(() => Vino, vino => vino.bodega),
    __metadata("design:type", Array)
], Bodega.prototype, "vinos", void 0);
Bodega = __decorate([
    Entity()
], Bodega);
export { Bodega };
