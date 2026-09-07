export class ValidacionError extends Error {
    detalles;
    constructor(detalles) {
        super('La peticion no cumplio con el contrato establecido');
        this.detalles = detalles;
        this.name = 'ValidacionError';
    }
}
//# sourceMappingURL=errores-http.js.map