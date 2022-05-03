import { ExternalEntity } from "../../masi/entities/external-entity";
import { CreateOperation } from '../../masi/operations/create-operation';

import { ExternalMasiEntityOperationResponse } from "../../masi/responses/external-masi-entity-operation-response";

export interface QboEntityCreateResponse<Entity extends ExternalEntity> extends ExternalMasiEntityOperationResponse<Entity, CreateOperation> { }
