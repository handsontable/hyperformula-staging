import {benchmark, ExpectedValue} from './benchmark'
import {sheetCellAddressToString} from '../src/Cell'
import {Config as EngineConfig} from '../src/Config'

function randomNumber(from: number, to: number): number {
  const span = to - from;
  return Math.random() * span + from;
}

export function sheet(): string[][] {
  const matrixSize = 1000

  const sheet = []
  let current = 1
  for (let i = 0; i < matrixSize; i++) {
    let rowToPush: string[] = []
    for (let j = 0; j < (matrixSize * 2); j++) {
      rowToPush.push(randomNumber(1, 1000).toString())
    }
    sheet.push(rowToPush)
  }
  sheet.push([`{=MMULT(A1:${sheetCellAddressToString({ row: matrixSize - 1, col: matrixSize - 1 })}, ${sheetCellAddressToString({ row: 0, col: matrixSize })}:${sheetCellAddressToString({ row: matrixSize - 1, col: matrixSize * 2 - 1 })})}`])

  return sheet
}

export function expectedValues(sheet: string[][]): ExpectedValue[] {
  return [
  ]
}

const s = sheet()
console.info('\n === Sheet Matrix Multiplication -- GPU === ')
benchmark(s, expectedValues(s), { millisecondsPerThousandRows: 8000, numberOfRuns: 3, engineConfig: new EngineConfig({ gpuMode: "gpu" })  })
console.info('\n === Sheet Matrix Multiplication -- CPU === ')
benchmark(s, expectedValues(s), { millisecondsPerThousandRows: 8000, numberOfRuns: 3, engineConfig: new EngineConfig({ gpuMode: "cpu" }) })