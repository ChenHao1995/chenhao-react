import * as demoActions from './demoActions'
import * as requestActions from './requestAction'
export { default as tujiaAction } from './tujiaAcction'

export default {
  ...demoActions,
  ...requestActions
  // tujiaAction
}
