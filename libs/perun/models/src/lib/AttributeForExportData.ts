import { AttributeDefinition, AttributeRights } from '@perun-web-apps/perun/openapi';

export interface AttributeForExportData {
  attributeDefinition: AttributeDefinition;
  attributeRights: AttributeRights[];
}
