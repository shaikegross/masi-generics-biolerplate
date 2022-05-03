import { IntegrationTypes } from "../../types/integrations-types";
import { MasiEntityTypes } from "../../types/masi-entity-types";
import { MasiEntityMapper } from "./masi-entity-mapper";
import { QboInvoiceMapper } from "./qbo/qbo-invoice-mapper";

// This factory is ugly sense it switches on TWO flags (integrationType and masiEntityType).
// this should be implemented in a map or a compound key of flags or something like that
export const getEntityMapper = (integrationType: IntegrationTypes, masiEntityType: MasiEntityTypes): MasiEntityMapper => {
  switch (integrationType) {
    case IntegrationTypes.QBO:
      switch (masiEntityType) {
        case MasiEntityTypes.INVOICE:
          return new QboInvoiceMapper()
        default:
          throw new Error(`Unsupported entity type: ${masiEntityType}`)
      }
    default:
      throw new Error(`Unsupported integration type: ${integrationType}`)
  }
}
