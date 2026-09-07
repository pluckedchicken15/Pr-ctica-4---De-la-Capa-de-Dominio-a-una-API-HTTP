import { ValidacionError } from "./errores-http.js";
export function validarCrearPrestamo(cuerpo) {
    const errores = [];
    if (typeof cuerpo !== 'object' || cuerpo === null) {
        throw new ValidacionError('El cuerpo debe ser en formato JSON');
    }
    const c = cuerpo;
    // 1. Validar libroId
    if (typeof c.libroId !== 'string' || c.libroId.trim() === '') {
        errores.push('libroId debe ser un texto y no debe estar vacío');
    }
    // 2. Validar otros campos necesarios (ej. usuarioId)
    if (typeof c.usuarioId !== 'string' || c.usuarioId.trim() === '') {
        errores.push('usuarioId debe ser un texto y no debe estar vacío');
    }
    // 3. Reunir y lanzar todos los errores juntos
    if (errores.length > 0) {
        throw new ValidacionError(errores.join('; '));
    }
    // 4. Retornar el objeto tipado si pasa todas las reglas
    return {
        libroId: c.libroId,
        socioId: c.usuarioId,
    };
}
//# sourceMappingURL=validar.js.map