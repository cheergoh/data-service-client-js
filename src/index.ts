import { Asset, IAssetJSON } from '@waves/data-entities';
import * as JSONBig from '@waves/json-bigint';

import getAssetsFn from './methods/getAssets';
import { pipeP, fetchData } from './utils';

import { TAssetId, TLibOptions } from './types';
export default class DataServiceClient {
  public getAssets(...ids: TAssetId[]): Promise<Asset[]> {
    return getAssetsFn(this.options)(...ids);
  }

  constructor(private options: TLibOptions) {
    if (!options.nodeUrl)
      throw new Error(
        'No nodeUrl was presented in options object. Check constructor call.'
      );
    this.options.nodeUrl = options.nodeUrl;
    this.options.parser = JSONBig.parse;
  }
}