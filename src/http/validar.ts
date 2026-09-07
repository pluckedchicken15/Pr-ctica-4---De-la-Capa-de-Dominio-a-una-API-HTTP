import { CrearPrestamoRequestDto } from "../contrato/prestamo-response.dto.js";
import { ValidacionError } from "./errores-http.js";

export function validarCrearPrestamo(cuerpo: unknown): CrearPrestamoRequestDto {
    const errores: string[] = [];

    if (typeof cuerpo !== 'object' || cuerpo === null) {
        throw new ValidacionError('El cuerpo debe ser en formato JSON');
    }

    const c = cuerpo as Record<string, unknown>;

    if (typeof c.libroId !== 'string' || c.libroId.trim() === '') {
        errores.push('libroId debe ser un texto y no debe estar vacío');
    }

    if (typeof c.usuarioId !== 'string' || c.usuarioId.trim() === '') {
        errores.push('usuarioId debe ser un texto y no debe estar vacío');
    }

    if (errores.length > 0) {
        throw new ValidacionError(errores.join('; ')); 
    }

    return {
        libroId: c.libroId,
        socioId: c.usuarioId,
    } as CrearPrestamoRequestDto;
}