import { ExternalEntity } from "../../masi/entities/external-entity";
import { ReadOperation } from '../../masi/operations/read-operation';

import { ExternalMasiEntityOperationResponse } from "../../masi/responses/external-masi-entity-operation-response";

export interface QboEntityReadResponse<Entity extends ExternalEntity> extends ExternalMasiEntityOperationResponse<Entity, ReadOperation> { }
