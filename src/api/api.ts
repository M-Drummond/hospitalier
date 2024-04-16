// api.js (API Service)
import axios, { Axios, AxiosError } from 'axios'
import type { Url } from 'url'

// mocked API
const API_URL: Url = '../data/patients.json'

export async function fetchData(params: string) {
  try {
    if (params) {
      const response = await axios.get(`${API_URL}` + '?' + params)
      return response.data
    } else {
      const response = await axios.get(`${API_URL}`)
      return response.data
    }
  } catch (error: AxiosError | null) {
    throw new Error(error?.response.data.message || 'Failed to fetch data')
  } finally {
    console.log('fetch finished')
  }
}
