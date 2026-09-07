import { ValidacionError } from "./errores-http.js";
export function validarCrearPrestamo(cuerpo) {
    const errores = [];
    if (typeof cuerpo !== 'object' || cuerpo === null) {
        throw new ValidacionError('El cuerpo debe ser formato JSON');
    }
    const c = cuerpo;
    if (typeof c.libroId !== 'string' || c.libroId.trim() === '') {
        errores.push('libroId debe ser un texto y no debe ser vacio');
    }
    if (typeof c.socioId !== 'string' || c.socioId.trim() === '') {
        errores.push('socioId debe ser un texto no vacio');
    }
    // 4. ejemplares: arreglo de enteros positivos, con al menos uno
    if (!Array.isArray(c.ejemplares) || c.ejemplares.length === 0) {
        errores.push('ejemplares debe ser un arreglo con al menos un elemento');
    }
    else if (!c.ejemplares.every((e) => Number.isInteger(e) && e > 0)) {
        errores.push('ejemplares solo admite numeros enteros positivos');
    }
    if (errores.length > 0) {
        throw new ValidacionError(errores.join('; '));
    }
    //  Ya comprobamos campo por campo, asi que aqui la asercion es
    //  honesta: el dato cumple la forma.
    return c;
}
//# sourceMappingURL=validar.js.map