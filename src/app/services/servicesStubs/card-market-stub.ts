import { IPickupPoint } from 'src/app/interfaces/pickupPoint'

export class CardMarketStub implements IPickupPoint {
  address = 'lala'
  distance = 2
  envelopeStock = 2
  envelopePrice = 1
  geoLocation = 3
  name = 'Stub'
  pendingOrders = true
}
