import {CellError, ErrorType, InternalCellValue, SimpleCellAddress} from '../../Cell'
import {ProcedureAst} from '../../parser'
import {FunctionPlugin} from './FunctionPlugin'

export class ModuloPlugin extends FunctionPlugin {
  public static implementedFunctions = {
    modulo: {
      translationKey: 'MOD',
    },
  }

  public modulo(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalCellValue {
    const validationResult = this.validateTwoNumericArguments(ast, formulaAddress)
    if (validationResult instanceof CellError) {
      return validationResult
    }
    const [dividend, divisor] = validationResult

    if (divisor === 0) {
      return new CellError(ErrorType.DIV_BY_ZERO)
    }

    return dividend % divisor
  }
}
