import { CrudOperation } from "../operations/crud-operation";
import { ExternalEntity } from "../entities/external-entity";

export interface ExternalMasiEntityOperationResponse<Operation extends CrudOperation, entity extends ExternalEntity> { responseData: any, duration: number };