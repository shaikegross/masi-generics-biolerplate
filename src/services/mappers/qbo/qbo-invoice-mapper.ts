import { QboEntity } from '../../../types/qbo/entities/qbo-entity';
import { QboInvoice } from '../../../types/qbo/entities/qbo-invoice';
import { QboEntityMapper } from './qbo-entity-mapper'
export class QboInvoiceMapper implements QboEntityMapper<QboInvoice> {
  toExternal(internalEntity: QboInvoice): QboEntity {
    throw new Error('Method not implemented.');
  }
  toInternal(externalEntity: QboEntity): QboInvoice {
    throw new Error('Method not implemented.');
  }
}