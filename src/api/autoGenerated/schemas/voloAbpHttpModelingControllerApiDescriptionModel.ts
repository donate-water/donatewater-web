/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * FieldSurvey API
 * OpenAPI spec version: v1
 */
import type { VoloAbpHttpModelingControllerApiDescriptionModelActions } from './voloAbpHttpModelingControllerApiDescriptionModelActions';
import type { VoloAbpHttpModelingControllerInterfaceApiDescriptionModel } from './voloAbpHttpModelingControllerInterfaceApiDescriptionModel';

export interface VoloAbpHttpModelingControllerApiDescriptionModel {
  actions?: VoloAbpHttpModelingControllerApiDescriptionModelActions;
  apiVersion?: string | null;
  controllerGroupName?: string | null;
  controllerName?: string | null;
  interfaces?: VoloAbpHttpModelingControllerInterfaceApiDescriptionModel[] | null;
  isIntegrationService?: boolean;
  isRemoteService?: boolean;
  type?: string | null;
}
