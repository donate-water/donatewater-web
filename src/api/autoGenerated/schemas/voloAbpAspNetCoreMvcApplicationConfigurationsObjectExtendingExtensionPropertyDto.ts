/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * FieldSurvey API
 * OpenAPI spec version: v1
 */
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto } from './voloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto';
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto } from './voloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto';
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDtoConfiguration } from './voloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDtoConfiguration';
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDtoDefaultValue } from './voloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDtoDefaultValue';
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto } from './voloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto';
import type { VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto } from './voloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto';

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto {
  api?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto;
  attributes?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto[] | null;
  configuration?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDtoConfiguration;
  defaultValue?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDtoDefaultValue;
  displayName?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto;
  type?: string | null;
  typeSimple?: string | null;
  ui?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto;
}
