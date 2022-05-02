import { ExternalMasiEntityResponses } from "../../masi/responses/external-masi-entity-responses";
import { QboEntity } from "../entities/qbo-entity";
import { QboEntityCreateResponse } from "./qbo-entity-create-response";
import { QboEntityDeleteResponse } from "./qbo-entity-delete-response";
import { QboEntityReadResponse } from "./qbo-entity-read-response";
import { QboEntityUpdateResponse } from "./qbo-entity-update-response";

export interface QboEntityResponses<Entity extends QboEntity> extends ExternalMasiEntityResponses<
  Entity,
  QboEntityCreateResponse<Entity>,
  QboEntityReadResponse<Entity>,
  QboEntityUpdateResponse<Entity>,
  QboEntityDeleteResponse<Entity>> { }