/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * FieldSurvey API
 * OpenAPI spec version: v1
 */
import type { IIASAFieldSurveyDtosCoordinate } from './iIASAFieldSurveyDtosCoordinate';
import type { IIASAFieldSurveyEnumReviewStatus } from './iIASAFieldSurveyEnumReviewStatus';

export interface IIASAFieldSurveyDtosReviewDto {
  createOrUpdateTime?: string;
  id?: number;
  lastUpdatedBy?: string | null;
  lastUpdatedByEmailId?: string | null;
  lastUpdatedById?: string | null;
  location?: IIASAFieldSurveyDtosCoordinate[] | null;
  score?: number;
  status?: IIASAFieldSurveyEnumReviewStatus;
  surveyCreationTime?: string;
  surveyCreator?: string | null;
  surveyCreatorEmailId?: string | null;
  surveyCreatorId?: string | null;
  surveyId?: number;
  surveyRating?: number;
}
