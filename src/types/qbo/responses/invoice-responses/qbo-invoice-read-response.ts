import { QboInvoice } from "../../entities/qbo-invoice";
import { QboEntityReadResponse } from "../qbo-entity-read-response";

export class QboInvoiceReadResponse implements QboEntityReadResponse<QboInvoice> {
  constructor(public responseData: any, public duration: number) { }
}