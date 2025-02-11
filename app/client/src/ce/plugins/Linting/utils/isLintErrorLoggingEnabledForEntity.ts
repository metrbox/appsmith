import { isJSAction } from "ee/workers/Evaluation/evaluationUtils";
import type { DataTreeEntity } from "entities/DataTree/dataTreeTypes";

export default function isLintErrorLoggingEnabledForEntity(
  entity: DataTreeEntity,
) {
  return isJSAction(entity);
}
