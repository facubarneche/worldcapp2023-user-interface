import { PickupPointDTO } from 'src/app/interfaces/pickupPointDTO'

export class PickupPoint implements PickupPointDTO {
  constructor(
    public name: string,
    public address: string,
    public envelopeStock: number,
    public geoLocation: number,
    public distance: number,
    public envelopePrice: number,
    public type: string
  ) {}

  //TODO: Generar los respectivos metodos para obtener estos datos
  pendingOrders = true
}

//Puntos de Ventas
//Cuando se traiga un pickuppoint va a ser new PickupPoint con sus respectivos atributos

//Service pickupPoint
//Encargado de obtener el pickuppoint (por ahora hacer un stub que tambien va a servir para los test)

//Componente pickupPoint
//Encargado de mostrar la data de pickuppoint y de hacer los cambios necesarios para volcar la data bien
