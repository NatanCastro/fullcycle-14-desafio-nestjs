import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateRouteDto } from './dto/create-route-dto';

@Injectable()
export class RoutesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getRoutes() {
    return await this.prismaService.route.findMany();
  }

  async createRoute(data: CreateRouteDto) {
    return await this.prismaService.route.create({
      data: {
        name: data.name,
        source: {
          lat: data.source.lat,
          lng: data.source.lng,
        },
        destination: {
          lat: data.destination.lat,
          lng: data.destination.lng,
        },
      },
    });
  }
}
