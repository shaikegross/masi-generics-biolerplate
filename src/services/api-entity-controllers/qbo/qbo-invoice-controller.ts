import { QboInvoice } from "../../../types/qbo/entities/qbo-invoice";
import { QboInvoiceCreateResponse } from "../../../types/qbo/responses/invoice-responses/qbo-invoice-create-response";
import { QboInvoiceDeleteResponse } from "../../../types/qbo/responses/invoice-responses/qbo-invoice-delete-response";
import { QboInvoiceReadResponse } from "../../../types/qbo/responses/invoice-responses/qbo-invoice-read-response";
import { QboInvoiceResponseTypes } from "../../../types/qbo/responses/invoice-responses/qbo-invoice-responses";
import { QboInvoiceUpdateResponse } from "../../../types/qbo/responses/invoice-responses/qbo-invoice-update-response";
import { QboEntityController } from "./qbo-entity-controller";

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