const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo salio mal" });
};

export default errorHandler;

// ver ultimo ejemplo de bici alquileres

// https://labsys.frc.utn.edu.ar/gitlab/desarrollo-de-software1/proyectos2024/3k2/martes/ejemplo-bici-alquileres/backend/-/blob/main/tests/barios.test.js?ref_type=heads
