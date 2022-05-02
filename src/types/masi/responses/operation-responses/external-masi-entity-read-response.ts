import { ReadOperation } from "../../../operations/read-operations";
import { ExternalMasiEntity } from "../../external-masi-entity";
import { ExternalMasiEntityOperationResponse } from "../external-masi-entity-operation-response";

export interface ExternalMasiEntityReadResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, ReadOperation> { }