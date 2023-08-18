import { ServicesConfiguration } from '@jvega/services'
import { Controller } from 'tsoa'

export abstract class ControllerBase extends Controller {
  protected servicesConfiguration: ServicesConfiguration
  constructor() {
    super()
    this.servicesConfiguration = new ServicesConfiguration();
  }
}
