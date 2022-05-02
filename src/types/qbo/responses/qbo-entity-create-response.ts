import { ExternalMasiEntity } from "../../masi/entities/external-masi-entity";
import { CreateOperation } from '../../masi/operations/create-operation';

import { ExternalMasiEntityOperationResponse } from "../../masi/responses/external-masi-entity-operation-response";

export interface QboEntityCreateResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, CreateOperation> { }
