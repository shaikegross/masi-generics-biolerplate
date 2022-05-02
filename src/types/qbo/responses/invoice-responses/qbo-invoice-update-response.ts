import { QboInvoice } from "../../entities/qbo-invoice";
import { QboEntityUpdateResponse } from "../qbo-entity-update-response";

export class QboInvoiceUpdateResponse implements QboEntityUpdateResponse<QboInvoice> {
  constructor(public responseData: any, public duration: number) { }
}