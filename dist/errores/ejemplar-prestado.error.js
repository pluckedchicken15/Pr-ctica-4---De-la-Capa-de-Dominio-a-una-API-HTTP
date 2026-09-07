// =====================================================================
//  errores/ejemplar-prestado.error.ts   —   SE ENTREGA HECHO
// =====================================================================
//  Un error de DOMINIO, no de HTTP.
// =====================================================================
export class EjemplarPrestadoError extends Error {
    ejemplar;
    constructor(ejemplar) {
        super(`El ejemplar ${ejemplar} ya esta prestado`);
        this.ejemplar = ejemplar;
        this.name = 'EjemplarPrestadoError';
    }
}
//# sourceMappingURL=ejemplar-prestado.error.js.map