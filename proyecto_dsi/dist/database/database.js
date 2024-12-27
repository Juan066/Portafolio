import { DataSource } from 'typeorm';
import { VinoEntity } from '../entities/VinoEntity.js';
import { BodegaEntity } from '../entities/BodegaEntity.js';
import { MaridajeEntity } from '../entities/MaridajeEntity.js';
import { ResenaEntity } from '../entities/ResenaEntity.js';
import { VarietalEntity } from '../entities/VarietalEntity.js';
import { PaisEntity } from '../entities/PaisEntity.js';
import { ProvinciaEntity } from '../entities/ProvinciaEntity.js';
import { RegionVitivinicolaEntity } from '../entities/RegionVitivinicolaEntity.js';
import { TipoUvaEntity } from '../entities/TipoUvaEntity.js';
export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'db/dbppai.db',
    // synchronize: true,    
    synchronize: false,
    logging: false,
    entities: [
        VinoEntity,
        BodegaEntity,
        MaridajeEntity,
        ResenaEntity,
        VarietalEntity,
        PaisEntity,
        ProvinciaEntity,
        RegionVitivinicolaEntity,
        TipoUvaEntity
    ],
});
