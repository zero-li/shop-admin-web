import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import managerMock from './mock/manager'
import indexMock from './mock/index'

export function setupProdMockServer() {
  createProdMockServer([
    ...managerMock, 
    ...indexMock, 
  ])
}
