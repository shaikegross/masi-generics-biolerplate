import { ExternalEntity } from "../../masi/entities/external-entity";
import { DeleteOperation } from '../../masi/operations/delete-operation';

import { ExternalMasiEntityOperationResponse } from "../../masi/responses/external-masi-entity-operation-response";

export interface QboEntityDeleteResponse<Entity extends ExternalEntity> extends ExternalMasiEntityOperationResponse<Entity, DeleteOperation> { }
