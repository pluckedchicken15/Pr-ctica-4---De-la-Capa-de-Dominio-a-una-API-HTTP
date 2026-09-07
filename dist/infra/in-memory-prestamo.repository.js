//  Vive en `infra/` porque es un DETALLE DE INFRAESTRUCTURA: es una de
//  las muchas formas posibles de guardar los datos. Manana puede ser
//  PostgreSQL con Prisma y nada mas arriba se enterara.
//
//  TODO: implementar la clase usando un Map<string, Prestamo>.
//    - findById   -> devolver el prestamo o null si no existe
//                    (pista: `this.datos.get(folio) ?? null`)
//    - findAll    -> `[...this.datos.values()]`
//    - save       -> guardar y devolver la entidad
//    - delete     -> borrar del Map
//    - findByLibro-> filtrar los que tengan ese libroId
export class InMemoryPrestamoRepository {
    // El almacen: la llave es el folio, el valor es el prestamo completo.
    datos = new Map();
    async findById(folio) {
        return this.datos.get(folio) ?? null;
    }
    async findAll() {
        return [...this.datos.values()];
    }
    async save(prestamo) {
        this.datos.set(prestamo.folio, prestamo);
        return prestamo;
    }
    async delete(folio) {
        this.datos.delete(folio);
    }
    async findByLibro(libroId) {
        return [...this.datos.values()].filter(p => p.libroId === libroId);
    }
}
//# sourceMappingURL=in-memory-prestamo.repository.js.map