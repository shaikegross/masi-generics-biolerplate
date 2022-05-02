import { QboEntity } from "../../../types/qbo/entities/qbo-entity";
import { QboEntityResponses } from "../../../types/qbo/responses/qbo-entity-responses";
import { MasiApiEntityController } from "../masi-api-entity-controller";

export abstract class QboEntityController<
  Entity extends QboEntity,
  EntityResponse extends QboEntityResponses<Entity>
  >
  extends MasiApiEntityController<QboEntity, EntityResponse> { }
