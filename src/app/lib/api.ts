const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api'

export async function fetchAPI(path: string) {
  const requestUrl = `${API_URL}${path}`
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}

export async function postToAPI(path: string, data: any) {
  const requestUrl = `${API_URL}${path}`
  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response.json()
} 