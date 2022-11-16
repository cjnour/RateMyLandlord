import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type ReviewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerReview = {
  readonly id: string;
  readonly address?: string | null;
  readonly cleanliness?: number | null;
  readonly age?: number | null;
  readonly accomodations?: number | null;
  readonly overall?: number | null;
  readonly renovated?: boolean | null;
  readonly would_recommend?: boolean | null;
  readonly pets?: boolean | null;
  readonly pests?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly id: string;
  readonly address?: string | null;
  readonly cleanliness?: number | null;
  readonly age?: number | null;
  readonly accomodations?: number | null;
  readonly overall?: number | null;
  readonly renovated?: boolean | null;
  readonly would_recommend?: boolean | null;
  readonly pets?: boolean | null;
  readonly pests?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review, ReviewMetaData>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review, ReviewMetaData>) => MutableModel<Review, ReviewMetaData> | void): Review;
}