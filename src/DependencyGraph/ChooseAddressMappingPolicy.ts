import {IAddressMappingStrategyConstructor, DenseStrategy, SparseStrategy} from './AddressMapping'
import {PlusStrategy} from './PlusTreeAddressMapping'

export interface IChooseAddressMapping {
  call(fill: number): IAddressMappingStrategyConstructor
}

export class DenseSparseChooseBasedOnThreshold implements IChooseAddressMapping {
  constructor(
    private readonly threshold: number
  ) {
  }

  public call(fill: number) {
    if (fill > this.threshold) {
      return DenseStrategy
    } else {
      return SparseStrategy
    }
  }
}

export class AlwaysSparse implements IChooseAddressMapping {
  public call() {
    return SparseStrategy
  }
}

export class AlwaysDense implements IChooseAddressMapping {
  public call() {
    return DenseStrategy
  }
}

export class AlwaysPlusTree implements IChooseAddressMapping {
  public call() {
    return PlusStrategy
  }
}
