import { ServicesConfiguration } from '@jvega/services'
import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Middlewares } from 'tsoa'

export abstract class ControllerBase extends Controller {
  protected servicesConfiguration: ServicesConfiguration
  constructor() {
    super()
    this.servicesConfiguration = new ServicesConfiguration()
  }
}
