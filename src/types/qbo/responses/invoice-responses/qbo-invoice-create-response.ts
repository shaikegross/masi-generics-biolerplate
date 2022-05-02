import { QboInvoice } from "../../entities/qbo-invoice";
import { QboEntityCreateResponse } from "../qbo-entity-create-response";

export class QboInvoiceCreateResponse implements QboEntityCreateResponse<QboInvoice> {
  constructor(public responseData: any, public duration: number) { }
}