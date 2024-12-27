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
import { Vino } from './Vino.js';
let Resena = class Resena {
    id;
    comentario;
    premium;
    fechaResena;
    puntaje;
    vino;
};
__decorate([
    PrimaryGeneratedColumn({ name: "id" }),
    __metadata("design:type", Number)
], Resena.prototype, "id", void 0);
__decorate([
    Column({ name: "comentario" }),
    __metadata("design:type", String)
], Resena.prototype, "comentario", void 0);
__decorate([
    Column({ name: "premium" }),
    __metadata("design:type", Boolean)
], Resena.prototype, "premium", void 0);
__decorate([
    Column({ name: "fechaResena" }),
    __metadata("design:type", String)
], Resena.prototype, "fechaResena", void 0);
__decorate([
    Column({ name: "puntaje" }),
    __metadata("design:type", Number)
], Resena.prototype, "puntaje", void 0);
__decorate([
    ManyToOne(() => Vino, vino => vino.resenas, { lazy: true }),
    JoinColumn({ name: "vino_id" }),
    __metadata("design:type", Promise)
], Resena.prototype, "vino", void 0);
Resena = __decorate([
    Entity()
], Resena);
export { Resena };
