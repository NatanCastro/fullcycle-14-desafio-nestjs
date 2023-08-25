export class CreateRouteDto {
  name: string;
  source: Coord;
  destination: Coord;
}

class Coord {
  lat: number;
  lng: number;
}
