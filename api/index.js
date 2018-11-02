/**
 * 封装fetch
 */
import fetch from 'isomorphic-fetch'

export default function Api({
  path = '',
  method = 'POST',
  header = {},
  data = null
}) {
  return fetch(path, {
    method: method,
    headers: new Headers({
      ...header
    }),
    body: data ? JSON.stringify(data) : undefined
  }).then((data) => {
    return data.json()
  }).catch(error => console.error('Error:', error))
}