import { DeleteOperation } from "../../../operations/delete-operations";
import { ExternalMasiEntity } from "../../external-masi-entity";
import { ExternalMasiEntityOperationResponse } from "../external-masi-entity-operation-response";

export interface ExternalMasiEntityDeleteResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, DeleteOperation> { }