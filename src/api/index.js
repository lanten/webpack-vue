import fetch from 'unfetch'


async function request(key, params) {
  return fetch('...').then(res => res.json())
}

export default {
  request,
}