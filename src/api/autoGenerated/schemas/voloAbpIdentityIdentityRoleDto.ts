/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * FieldSurvey API
 * OpenAPI spec version: v1
 */
import type { VoloAbpIdentityIdentityRoleDtoExtraProperties } from './voloAbpIdentityIdentityRoleDtoExtraProperties';

export interface VoloAbpIdentityIdentityRoleDto {
  concurrencyStamp?: string | null;
  readonly extraProperties?: VoloAbpIdentityIdentityRoleDtoExtraProperties;
  id?: string;
  isDefault?: boolean;
  isPublic?: boolean;
  isStatic?: boolean;
  name?: string | null;
}
