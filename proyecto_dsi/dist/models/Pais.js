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
import { Provincia } from './Provincia.js';
let Pais = class Pais {
    id;
    nombre;
    // @OneToMany(() => Provincia, provincia => provincia.pais, { lazy: true })
    // provincias: Promise<Provincia[]>;
    // @OneToMany(() => Provincia, provincia => provincia.pais, { lazy: true })
    // provincias: Provincia[];
    provincias;
};
__decorate([
    PrimaryColumn({ name: "id" }),
    __metadata("design:type", Number)
], Pais.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], Pais.prototype, "nombre", void 0);
__decorate([
    OneToMany(() => Provincia, provincia => provincia.pais),
    __metadata("design:type", Array)
], Pais.prototype, "provincias", void 0);
Pais = __decorate([
    Entity()
], Pais);
export { Pais };
