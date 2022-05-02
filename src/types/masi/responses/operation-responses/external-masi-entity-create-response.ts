import { CreateOperation } from "../../../operations/create-operations";
import { ExternalMasiEntity } from "../../external-masi-entity";
import { ExternalMasiEntityOperationResponse } from "../external-masi-entity-operation-response";

export interface ExternalMasiEntityCreateResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, CreateOperation> { }