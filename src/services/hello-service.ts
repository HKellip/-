import { api, ENDPOINTS } from "@services"

class HelloService {
  async hello() {
      return api.get(ENDPOINTS.HELLO)
    }
}

export const helloService = new HelloService()