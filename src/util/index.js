import immutable, { fromJS } from 'immutable'

function deepMerge(...data) {
  data[0] = fromJS(data[0])
  const result = data.reduce(function(last, now = {}) {
    return last.mergeDeep(now)
  })
  return result.toJS()
}
export { deepMerge }
