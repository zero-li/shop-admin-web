import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import managerMock from './mock/manager'

export function setupProdMockServer() {
  createProdMockServer([
    ...managerMock, 
  
  ])
}
