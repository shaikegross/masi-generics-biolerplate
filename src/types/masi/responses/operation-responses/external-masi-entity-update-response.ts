import { UpdateOperation } from "../../../operations/update-operations";
import { ExternalMasiEntity } from "../../external-masi-entity";
import { ExternalMasiEntityOperationResponse } from "../external-masi-entity-operation-response";

export interface ExternalMasiEntityUpdateResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, UpdateOperation> { }