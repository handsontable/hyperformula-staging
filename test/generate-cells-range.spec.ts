import {CellAddress, relativeCellAddress, SimpleCellAddress} from '../src/Cell'
import {generateCellsFromRangeGenerator} from '../src/GraphBuilder'

const generateCellsFromRange = (rangeStart: SimpleCellAddress, rangeEnd: SimpleCellAddress): SimpleCellAddress[] => {
  return Array.from(generateCellsFromRangeGenerator(rangeStart, rangeEnd))
}

describe('generateCellsFromRange', () => {
  it('one element', () => {
    expect(generateCellsFromRange(relativeCellAddress(0, 0), relativeCellAddress(0, 0))).toEqual([
      relativeCellAddress(0, 0),
    ])
  })

  it('simple row', () => {
    expect(generateCellsFromRange(relativeCellAddress(0, 0), relativeCellAddress(1, 0))).toEqual([
      relativeCellAddress(0, 0),
      relativeCellAddress(1, 0),
    ])
  })

  it('simple column', () => {
    expect(generateCellsFromRange(relativeCellAddress(0, 0), relativeCellAddress(0, 1))).toEqual([
      relativeCellAddress(0, 0),
      relativeCellAddress(0, 1),
    ])
  })

  it('simple square', () => {
    expect(generateCellsFromRange(relativeCellAddress(0, 0), relativeCellAddress(1, 1))).toEqual([
      relativeCellAddress(0, 0),
      relativeCellAddress(1, 0),
      relativeCellAddress(0, 1),
      relativeCellAddress(1, 1),
    ])
  })
})
