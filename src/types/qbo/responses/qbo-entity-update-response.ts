import { ExternalMasiEntity } from "../../masi/entities/external-masi-entity";
import { UpdateOperation } from '../../masi/operations/update-operation';

import { ExternalMasiEntityOperationResponse } from "../../masi/responses/external-masi-entity-operation-response";

export interface QboEntityUpdateResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, UpdateOperation> { }
