import { ExternalMasiEntity } from "../../masi/entities/external-masi-entity";
import { DeleteOperation } from '../../masi/operations/delete-operation';

import { ExternalMasiEntityOperationResponse } from "../../masi/responses/external-masi-entity-operation-response";

export interface QboEntityDeleteResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, DeleteOperation> { }
