import { QboInvoice } from "../../entities/qbo-invoice";
import { QboEntityResponses } from "../qbo-entity-responses";
import { QboInvoiceCreateResponse } from "./qbo-invoice-create-response";
import { QboInvoiceDeleteResponse } from "./qbo-invoice-delete-response";
import { QboInvoiceReadResponse } from "./qbo-invoice-read-response";
import { QboInvoiceUpdateResponse } from "./qbo-invoice-update-response";

export abstract class QboInvoiceResponseTypes implements QboEntityResponses<QboInvoice> {
  createResponse: QboInvoiceCreateResponse;
  deleteResponse: QboInvoiceDeleteResponse;
  readResponse: QboInvoiceReadResponse;
  updateResponse: QboInvoiceUpdateResponse;
}
