import { getApiEntityController } from '../../../services/api-entity-controllers/api-entity-controllers-factory'
import { IntegrationTypes } from '../../../types/integrations-types'
import { MasiEntityTypes } from '../../../types/masi-entity-types'

export const handler = (createInvoiceRequest: any) => {
  const qboApiController = getApiEntityController(IntegrationTypes.QBO, MasiEntityTypes.INVOICE)
  return qboApiController.create(createInvoiceRequest.invoice);
}