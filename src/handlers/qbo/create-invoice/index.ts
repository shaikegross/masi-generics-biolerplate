import { getApiEntityController } from '../../../services/api-entity-controllers/api-entity-controllers-factory'
import { getEntityMapper } from '../../../services/mappers/masi-entity-mapper-factory'
import { IntegrationTypes } from '../../../types/integrations-types'
import { MasiEntityTypes } from '../../../types/masi-entity-types'
import { QboInvoice } from '../../../types/qbo/entities/qbo-invoice'

export const handler = (createInvoiceRequest: { invoice: QboInvoice }) => {
  const mapper = getEntityMapper(IntegrationTypes.QBO, MasiEntityTypes.INVOICE);
  const invoice = mapper.toInternal(createInvoiceRequest.invoice);
  const qboApiController = getApiEntityController(IntegrationTypes.QBO, MasiEntityTypes.INVOICE)
  const createdMasiInvoice = qboApiController.create(invoice);

  return mapper.toExternal(createdMasiInvoice);
}