import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UntitledModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UntitledModel {
  readonly id: string;
  readonly type?: string | null;
  readonly provider_name?: string | null;
  readonly price?: number | null;
  readonly training_duration?: number | null;
  readonly level?: string | null;
  readonly program_thumbnail_url?: string | null;
  readonly is_publish?: boolean | null;
  readonly summary?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UntitledModel, UntitledModelMetaData>);
  static copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel, UntitledModelMetaData>) => MutableModel<UntitledModel, UntitledModelMetaData> | void): UntitledModel;
}