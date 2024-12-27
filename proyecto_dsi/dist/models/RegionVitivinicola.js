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
import { Provincia } from './Provincia.js';
import { Bodega } from './Bodega.js';
let RegionVitivinicola = class RegionVitivinicola {
    id;
    nombre;
    descripcion;
    provincia;
    bodega;
};
__decorate([
    PrimaryGeneratedColumn({ name: "id" }),
    __metadata("design:type", Number)
], RegionVitivinicola.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], RegionVitivinicola.prototype, "nombre", void 0);
__decorate([
    Column({ name: "descripcion" }),
    __metadata("design:type", String)
], RegionVitivinicola.prototype, "descripcion", void 0);
__decorate([
    ManyToOne(() => Provincia, provincia => provincia.regionesVitivinicolas),
    JoinColumn({ name: "provincia_id" }),
    __metadata("design:type", Provincia)
], RegionVitivinicola.prototype, "provincia", void 0);
__decorate([
    OneToMany(() => Bodega, (bodega) => bodega.regionVitivinicola),
    __metadata("design:type", Array)
], RegionVitivinicola.prototype, "bodega", void 0);
RegionVitivinicola = __decorate([
    Entity("RegionVitivinicola")
], RegionVitivinicola);
export { RegionVitivinicola };
