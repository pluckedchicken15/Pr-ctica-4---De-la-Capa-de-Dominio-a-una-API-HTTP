export class ValidacionError extends Error {
    constructor(public readonly detalles: string) {
        super('La peticion no cumplio con el contrato establecido');
        this.name = 'ValidacionError';
    }
}