import { Vino } from "./classes/vino.js";
import { Maridaje } from "./classes/maridaje.js";
import { Varietal } from "./classes/varietal.js";
import { TipoUva } from "./classes/tipoUva.js";
import { Resena } from "./classes/resena.js";
import { Bodega } from "./classes/bodega.js";
import { RegionVitivinicola } from "./classes/regionVitivinicola.js";
import { Pais } from "./classes/pais.js";
import { Provincia } from "./classes/provincia.js";
const pais_uno = new Pais('Argentina');
const provincia_uno = new Provincia('Cordoba');
const provincia_dos = new Provincia('Mendoza');
provincia_uno.establecerPais(pais_uno);
provincia_dos.establecerPais(pais_uno);
const region_uno = new RegionVitivinicola("descripcion", "Región 1");
const region_dos = new RegionVitivinicola("descripcion", "Región 2");
const region_tres = new RegionVitivinicola("descripcion", "Región 3");
const region_cuatro = new RegionVitivinicola("descripcion", "Región 4");
const region_cinco = new RegionVitivinicola("descripcion", "Región 5");
region_uno.establecerProvincia(provincia_dos);
region_dos.establecerProvincia(provincia_uno);
region_tres.establecerProvincia(provincia_uno);
region_cuatro.establecerProvincia(provincia_uno);
region_cinco.establecerProvincia(provincia_dos);
const maridaje_uno = new Maridaje("Un acompañamiento clásico con una variedad de quesos y embutidos.", "Quesos y Embutidos");
const maridaje_dos = new Maridaje("Un acompañamiento clásico ", "Quesos ");
const maridaje_tres = new Maridaje("Perfecto para una cena elegante con carne asada.", "Carne Asada");
const maridaje_cuatro = new Maridaje("Ideal para disfrutar con platos de pescado fresco.", "Pescado Fresco");
const maridaje_cinco = new Maridaje("Combina a la perfección con postres de chocolate.", "Chocolate");
const maridaje_seis = new Maridaje("Perfecto para disfrutar con una tabla de quesos variados.", "Tabla de Quesos");
const maridaje_siete = new Maridaje("Ideal para acompañar platos de pasta y pizza.", "Pasta y Pizza");
const maridaje_ocho = new Maridaje("Combina a la perfección con platos de carne a la parrilla.", "Carne a la Parrilla");
const maridaje_nueve = new Maridaje("Perfecto para acompañar platos de comida asiática.", "Comida Asiática");
const maridaje_diez = new Maridaje("Ideal para maridar con quesos suaves y postres de frutas.", "Quesos Suaves y Postres de Frutas");
const maridaje_once = new Maridaje("Combina a la perfección con platos de comida picante.", "Comida Picante");
const varietal_uno = new Varietal("Malbec", 40, new TipoUva("Uva rica", "Uva"));
const varietal_dos = new Varietal("Cabernet Sauvignon", 40, new TipoUva("Uva rica", "Uva"));
const varietal_tres = new Varietal("Merlot", 35, new TipoUva("Uva aromática", "Uva"));
const varietal_cuatro = new Varietal("Pinot Noir", 30, new TipoUva("Uva suave", "Uva"));
const varietal_cinco = new Varietal("Chardonnay", 45, new TipoUva("Uva intensa", "Uva"));
const varietal_seis = new Varietal("Sauvignon Blanc", 40, new TipoUva("Uva elegante", "Uva"));
const varietal_siete = new Varietal("Syrah/Shiraz", 35, new TipoUva("Uva frutal", "Uva"));
const vino_uno = new Vino(1931, "", "Balbo", "Un vino tinto con aromas intensos de frutas rojas y un toque de roble", 524, [maridaje_dos, maridaje_uno], [varietal_uno], new Bodega("coordenadas", "Mira que vino", "historia", "Bodega Zuccardi", "12/05/2020", region_uno));
const vino_dos = new Vino(1950, "", "Dada", "Un blanco refrescante con notas cítricas y florales.", 450, [maridaje_tres, maridaje_cuatro], [varietal_tres], new Bodega("coordenadas", "Bodega A", "historia", "Bodega Astronoma", "05/03/2019", region_dos));
const vino_tres = new Vino(1975, "", "Skinny Shotgun", "Un rosado vibrante con aromas a frutas del bosque y un toque de especias.", 375, [maridaje_cuatro], [varietal_cuatro], new Bodega("coordenadas", "Bodega B", "historia", "Bodega Pulenta", "15/09/2015", region_dos));
const vino_cuatro = new Vino(1960, "", "Vino Toro", "Un espumante fresco y vibrante con burbujas finas y persistentes.", 600, [maridaje_seis], [varietal_seis], new Bodega("coordenadas", "Bodega C", "historia", "Bodega El Papu", "25/08/2018", region_uno));
const vino_cinco = new Vino(1982, "", "Bell ville", "Un tinto robusto con taninos suaves y notas de frutas maduras y especias.", 750, [maridaje_ocho], [varietal_cinco], new Bodega("coordenadas", "Bodega D", "historia", "Bodega Rutini", "10/04/2016", region_dos));
const vino_seis = new Vino(1995, "", "Luigi bosca", "Un blanco seco con una acidez refrescante y aromas a frutas tropicales.", 420, [maridaje_siete], [varietal_cinco], new Bodega("coordenadas", "Bodega E", "historia", "Bodega Zuccardi", "30/11/2017", region_dos));
const vino_siete = new Vino(2000, "", "Cordero", "Un rosado delicado con una explosión de aromas a fresas y notas florales.", 380, [maridaje_seis], [varietal_seis], new Bodega("coordenadas", "Bodega F", "historia", "Bodega Rutini", "15/07/2015", region_uno));
const vino_ocho = new Vino(2005, "", "Piel lobo", "Un tinto joven y frutal con una explosión de sabores a frutas del bosque.", 500, [maridaje_nueve], [varietal_cinco, varietal_seis], new Bodega("coordenadas", "Bodega G", "historia", "Bodega Zuccardi", "20/06/2014", region_uno));
const vino_nueve = new Vino(2010, "", "El Caniche", "Un blanco fresco y ligero con notas cítricas y un final refrescante.", 380, [maridaje_diez], [varietal_seis], new Bodega("coordenadas", "Bodega H", "historia", "Bodega Caro", "18/09/2013", region_cinco));
const vino_diez = new Vino(2015, "", "D.V Catena", "Un rosado seco con aromas a frutas rojas y una acidez equilibrada.", 420, [maridaje_nueve], [varietal_dos], new Bodega("coordenadas", "Bodega I", "historia", "Bodega Zuccardi", "14/03/2012", region_cuatro));
const vino_once = new Vino(2020, "", "LPQM", "Un espumante elegante con burbujas finas y una frescura inigualable.", 600, [maridaje_diez], [varietal_seis], new Bodega("coordenadas", "Bodega J", "historia", "Bodega Norton", "22/08/2011", region_tres));
const vino_doce = new Vino(2020, "", "El Diavlo", "Un espumante elegante con burbujas finas y una frescura inigualable.", 600, [maridaje_diez], [varietal_uno], new Bodega("coordenadas", "Bodega J", "historia", "Bodega Salentein", "22/08/2011", region_tres));
const vino_trece = new Vino(2020, "", "Veintiun pilotos", "Un espumante elegante con burbujas finas y una frescura inigualable.", 600, [maridaje_diez], [varietal_dos, varietal_uno], new Bodega("coordenadas", "Bodega J", "historia", "Bodega Catena Zapata", "22/08/2011", region_tres));
const vino_catorce = new Vino(2020, "", "Monitos articos  ", "Un espumante elegante con burbujas finas y una frescura inigualable.", 600, [maridaje_diez], [varietal_cuatro, varietal_cinco], new Bodega("coordenadas", "Bodega J", "historia", "Bodega Salentein", "22/08/2011", region_tres));
const resena_uno = new Resena("Una opción perfecta para celebraciones.", true, "2018-10-10", 5);
const resena_dos = new Resena("Un vino perfecto para una tarde de verano.", true, "2019-06-05", 4.5);
const resena_tres = new Resena("Un vino que sorprende por su equilibrio y complejidad.", true, "2020-10-12", 3.5);
const resena_cuatro = new Resena("Un vino con una relación calidad-precio excepcional.", true, "2021-04-07", 5);
const resena_diez = new Resena("Un vino con cuerpo y carácter, ideal para maridar con platos de carne roja.", true, "2021-11-20", 5);
const resena_once = new Resena("Un vino joven y fresco, perfecto para reuniones informales.", true, "2022-03-08", 2);
const resena_cinco = new Resena("Un vino con un bouquet aromático excepcional y un final largo y seductor.", true, "2023-07-15", 3);
const resena_seis = new Resena("Un vino que cautiva con su elegancia y sutileza, perfecto para ocasiones especiales.", true, "2023-11-28", 4);
const resena_siete = new Resena("Un vino que destaca por su frescura y versatilidad, ideal para maridar con una amplia variedad de platos.", true, "2024-02-10", 3);
const resena_ocho = new Resena("Un vino con una expresión frutal encantadora y una textura sedosa en boca.", false, "2024-05-05", 3.5);
const resena_nueve = new Resena("Un vino complejo y estructurado que revela su carácter con cada sorbo.", false, "2024-08-20", 2.5);
const resena_doce = new Resena("Un vino que sorprende por su armonía y elegancia, una joya enológica.", true, "2024-11-15", 1);
vino_uno.agregarResena(resena_uno);
vino_uno.agregarResena(resena_dos);
vino_uno.agregarResena(resena_tres);
vino_uno.agregarResena(resena_ocho);
vino_dos.agregarResena(resena_dos);
vino_dos.agregarResena(resena_tres);
vino_dos.agregarResena(resena_cinco);
vino_tres.agregarResena(resena_diez);
vino_tres.agregarResena(resena_nueve);
vino_cuatro.agregarResena(resena_tres);
vino_cinco.agregarResena(resena_once);
vino_cinco.agregarResena(resena_cinco);
vino_seis.agregarResena(resena_seis);
vino_seis.agregarResena(resena_ocho);
vino_siete.agregarResena(resena_siete);
vino_ocho.agregarResena(resena_ocho);
vino_ocho.agregarResena(resena_cuatro);
vino_nueve.agregarResena(resena_nueve);
vino_diez.agregarResena(resena_doce);
vino_once.agregarResena(resena_nueve);
vino_doce.agregarResena(resena_diez);
vino_doce.agregarResena(resena_uno);
vino_trece.agregarResena(resena_uno);
vino_catorce.agregarResena(resena_siete);
vino_catorce.agregarResena(resena_seis);
vino_catorce.agregarResena(resena_cinco);
vino_catorce.agregarResena(resena_ocho);
export const vinosArray = [vino_uno,
    vino_dos,
    vino_tres,
    vino_cuatro,
    vino_cinco,
    vino_seis,
    vino_siete,
    vino_ocho,
    vino_nueve,
    vino_diez,
    vino_once, vino_doce, vino_trece, vino_catorce];
