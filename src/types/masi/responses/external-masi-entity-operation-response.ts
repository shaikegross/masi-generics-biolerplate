import { CrudOperation } from "../operations/crud-operation";
import { ExternalMasiEntity } from "../entities/external-masi-entity";

export interface ExternalMasiEntityOperationResponse<Operation extends CrudOperation, entity extends ExternalMasiEntity> { responseData: any, duration: number };