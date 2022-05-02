import { QboInvoice } from "../../entities/qbo-invoice";
import { QboEntityDeleteResponse } from "../qbo-entity-delete-response";

export class QboInvoiceDeleteResponse implements QboEntityDeleteResponse<QboInvoice> {
  constructor(public responseData: any, public duration: number) { }
}