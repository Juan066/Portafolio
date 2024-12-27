var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../database/database.js';
import { VinoEntity } from '../entities/VinoEntity.js';
let VinoService = class VinoService {
    //
    async getAllVinos() {
        // mover a database ??????  || agregar validacion de que si esta incializada
        await AppDataSource.initialize()
            .then(() => console.log('Base de datos conectada correctamente.'))
            .catch((err) => console.error('Error de conexión a la base de datos:', err));
        const vinos = await AppDataSource.getRepository(VinoEntity).find({
            relations: [
                'bodega',
                'bodega.regionVitivinicola',
                'bodega.regionVitivinicola.provincia',
                'bodega.regionVitivinicola.provincia.pais',
                'maridajes',
                'resenas',
                'varietales',
                'varietales.tipoUva'
            ],
        });
        return vinos;
    }
};
VinoService = __decorate([
    Injectable()
], VinoService);
export { VinoService };
