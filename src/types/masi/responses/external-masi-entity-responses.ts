import { ExternalMasiEntity } from "../entities/external-masi-entity";
import { ExternalMasiEntityCreateResponse } from '../responses/operation-responses/external-masi-entity-create-response'
import { ExternalMasiEntityReadResponse } from '../responses/operation-responses/external-masi-entity-read-response'
import { ExternalMasiEntityUpdateResponse } from '../responses/operation-responses/external-masi-entity-update-response'
import { ExternalMasiEntityDeleteResponse } from '../responses/operation-responses/external-masi-entity-delete-response'

export interface ExternalMasiEntityResponses<
  Entity extends ExternalMasiEntity,
  CreateResponse extends ExternalMasiEntityCreateResponse<Entity> = ExternalMasiEntityCreateResponse<Entity>,
  ReadResponse extends ExternalMasiEntityReadResponse<Entity> = ExternalMasiEntityReadResponse<Entity>,
  UpdateResponse extends ExternalMasiEntityUpdateResponse<Entity> = ExternalMasiEntityUpdateResponse<Entity>,
  DeleteResponse extends ExternalMasiEntityDeleteResponse<Entity> = ExternalMasiEntityDeleteResponse<Entity>
  > {
  createResponse: CreateResponse;
  readResponse: ReadResponse;
  updateResponse: UpdateResponse;
  deleteResponse: DeleteResponse;
}
