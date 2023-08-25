import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route-dto';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  getRoutes() {
    return this.routesService.getRoutes();
  }

  @Post()
  createRoute(@Body() body: CreateRouteDto) {
    return this.routesService.createRoute(body);
  }
}
