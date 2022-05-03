import { MasiApiEntityController } from './masi-api-entity-controller'
import { IntegrationTypes } from '../../types/integrations-types'
import { MasiEntityTypes } from '../../types/masi-entity-types'
import { QboInvoiceController } from './qbo/qbo-invoice-controller'

export const getApiEntityController = (integrationType: IntegrationTypes, masiEntityType: MasiEntityTypes): MasiApiEntityController => {
  // This factory is ugly sense it switches on TWO flags (integrationType and masiEntityType).
  // this should be implemented in a map or a compound key of flags or something like that
  switch (integrationType) {
    case IntegrationTypes.QBO:
      switch (masiEntityType) {
        case MasiEntityTypes.INVOICE:
          return new QboInvoiceController()
        default:
          throw new Error(`Unsupported entity type: ${masiEntityType}`)
      }
    default:
      throw new Error(`Unsupported integration type: ${integrationType}`)
  }
}