import { ExternalEntity } from "../../masi/entities/external-entity";
import { UpdateOperation } from '../../masi/operations/update-operation';

import { ExternalMasiEntityOperationResponse } from "../../masi/responses/external-masi-entity-operation-response";

export interface QboEntityUpdateResponse<Entity extends ExternalEntity> extends ExternalMasiEntityOperationResponse<Entity, UpdateOperation> { }
