import Axios from 'axios'

export const EchoService = {

  async echo(): Promise<string> {
    const response = await Axios.get("http://localhost:8448/echo")
    console.log(response)
    return response.toString()
  }
}
