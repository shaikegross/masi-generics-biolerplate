import { ExternalMasiEntity } from "../../masi/entities/external-masi-entity";
import { ReadOperation } from '../../masi/operations/read-operation';

import { ExternalMasiEntityOperationResponse } from "../../masi/responses/external-masi-entity-operation-response";

export interface QboEntityReadResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, ReadOperation> { }
