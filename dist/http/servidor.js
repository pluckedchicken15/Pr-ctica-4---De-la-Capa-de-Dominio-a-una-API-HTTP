import express from 'express';
import { InMemoryPrestamoRepository } from '../infra/in-memory-prestamo.repository.js';
import { PrestamoService } from '../servicios/prestamo.service.js';
import { aResponseDto } from '../contrato/prestamo-response.dto.js';
import { validarCrearPrestamo } from './validar.js';
import { ValidacionError } from './errores-http.js';
import { EjemplarPrestadoError } from '../errores/ejemplar-prestado.error.js';
const PORT = 3000;
const repositorio = new InMemoryPrestamoRepository();
const servicio = new PrestamoService(repositorio);
const app = express();
app.use(express.json());
app.use(express.static('dist/cliente'));
// GET /api/prestamos
app.get('/api/prestamos', async (req, res, next) => {
    try {
        const libroId = req.query.libroId;
        if (libroId === undefined || libroId.trim() === '') {
            const error = {
                error: "PARAMETRO_FALTANTE",
                mensaje: "Se requiere el parametro libroId"
            };
            res.status(400).json(error);
            return;
        }
        const prestamos = await servicio.listarPorLibro(libroId);
        res.status(200).json(prestamos.map(aResponseDto));
    }
    catch (error) {
        next(error);
    }
});
// POST /api/prestamos
app.post('/api/prestamos', async (req, res, next) => {
    try {
        const dto = validarCrearPrestamo(req.body);
        const prestamo = await servicio.crear(dto);
        res.status(201).json(aResponseDto(prestamo));
    }
    catch (error) {
        next(error); // <-- Captura el ValidacionError o EjemplarPrestadoError y lo pasa al middleware
    }
});
// Middleware de errores de Express (Debe ir después de las rutas y tener 4 parámetros)
app.use((error, req, res, next) => {
    if (error instanceof ValidacionError || error.name === 'ValidacionError') {
        return res.status(400).json({
            error: "VALIDACION_FALLIDA",
            mensaje: error.detalles || error.message
        });
    }
    if (error instanceof EjemplarPrestadoError || error.name === 'EjemplarPrestadoError') {
        return res.status(409).json({
            error: "EJEMPLAR_PRESTADO",
            mensaje: error.message
        });
    }
    res.status(500).json({
        error: "ERROR_INTERNO",
        mensaje: "Ocurrió un error inesperado"
    });
});
app.listen(PORT, () => {
    console.log("El servidor esta corriendo en el puerto " + PORT);
});
//# sourceMappingURL=servidor.js.map