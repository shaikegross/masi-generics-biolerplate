// Masi Types
interface CrudOperation { };
abstract class CreateOperation implements CrudOperation { };
abstract class UpdateOperation implements CrudOperation { };
abstract class ReadOperation implements CrudOperation { };
abstract class DeleteOperation implements CrudOperation { };

interface ExternalMasiEntity { };
interface ExternalMasiEntityOperationResponse<Operation extends CrudOperation, entity extends ExternalMasiEntity> { responseData: any, duration: number };

interface ExternalMasiEntityCreateResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, CreateOperation> { }
interface ExternalMasiEntityReadResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, ReadOperation> { }
interface ExternalMasiEntityUpdateResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, UpdateOperation> { }
interface ExternalMasiEntityDeleteResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, DeleteOperation> { }

interface ExternalMasiEntityResponseTypes<
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

export abstract class MasiApiEntityController<
  Entity extends ExternalMasiEntity,
  EntityResponse extends ExternalMasiEntityResponseTypes<Entity>> {
  abstract create(invoice: Entity): EntityResponse["createResponse"];
  abstract read(): EntityResponse["readResponse"];
  abstract update(invoice: Entity): EntityResponse["updateResponse"];
  abstract delete(invoice: Entity): EntityResponse["deleteResponse"];
}

// QBO types
interface QboEntity { };

interface QboEntityCreateResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, CreateOperation> { }
interface QboEntityReadResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, ReadOperation> { }
interface QboEntityUpdateResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, UpdateOperation> { }
interface QboEntityDeleteResponse<Entity extends ExternalMasiEntity> extends ExternalMasiEntityOperationResponse<Entity, DeleteOperation> { }

export interface QboEntityResponseTypes<Entity extends QboEntity> extends ExternalMasiEntityResponseTypes<
  Entity,
  QboEntityCreateResponse<Entity>,
  QboEntityReadResponse<Entity>,
  QboEntityUpdateResponse<Entity>,
  QboEntityDeleteResponse<Entity>> { }

export abstract class QboEntityController<
  Entity extends QboEntity,
  EntityResponse extends QboEntityResponseTypes<Entity>
  >
  extends MasiApiEntityController<QboEntity, EntityResponse> { }

// QBO Invoice types
class QboInvoice implements QboEntity { };

class QboInvoiceCreateResponse implements QboEntityCreateResponse<QboInvoice> {
  constructor(public responseData: any, public duration: number) { }
}
class QboInvoiceReadResponse implements QboEntityReadResponse<QboInvoice> {
  constructor(public responseData: any, public duration: number) { }
}
class QboInvoiceUpdateResponse implements QboEntityReadResponse<QboInvoice> {
  constructor(public responseData: any, public duration: number) { }
}
class QboInvoiceDeleteResponse implements QboEntityReadResponse<QboInvoice> {
  constructor(public responseData: any, public duration: number) { }
}

abstract class QboInvoiceResponseTypes implements QboEntityResponseTypes<QboInvoice> {
  createResponse: QboInvoiceCreateResponse;
  deleteResponse: QboInvoiceDeleteResponse;
  readResponse: QboInvoiceReadResponse;
  updateResponse: QboInvoiceUpdateResponse;
}

export class QboInvoiceController extends QboEntityController<QboInvoice, QboInvoiceResponseTypes> {
  create(invoice: QboInvoice): QboInvoiceCreateResponse {
    //call create on QBO
    return new QboInvoiceCreateResponse({}, 0);
  }
  read(): QboInvoiceReadResponse {
    // call read on QBO
    return new QboInvoiceReadResponse({}, 0);
  }
  update(invoice: QboInvoice): QboInvoiceUpdateResponse {
    // call update on QBO
    return new QboInvoiceUpdateResponse({}, 0);
  }
  delete(invoice: QboInvoice): QboInvoiceDeleteResponse {
    // call delete on QBO
    return new QboInvoiceDeleteResponse({}, 0);
  }
}