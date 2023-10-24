import {HttpClient} from '@angular/common/http'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {
  UserLoginResponseDTO,
  UserLoginDTO,
  ProfileInfoDTO,
  UserFigusListType
} from 'src/app/dtos/user.dto'
import {Injectable} from '@angular/core'
import {API_URL} from '../config'
import {lastValueFrom} from 'rxjs'
import {USER_KEY_STORAGE, getUserId} from 'src/app/helpers/getUserId.helper'
import {FiguritaDTO} from 'src/app/dtos/figurita.dto'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  static userLogedID?: number

  async login(userData: UserLoginDTO) {
    const response$ = this.httpClient.post<UserLoginResponseDTO>(
      `${API_URL}/user/login`,
      userData
    )
    const userId = await lastValueFrom(response$)
    sessionStorage.setItem(USER_KEY_STORAGE, userId.userLogedID.toString())
  }

  async figuritaRequest(figurita: Figurita) {
    await lastValueFrom(
      this.httpClient.patch(`${API_URL}/user/request-figurita`, {
        userLogedID: UserService.userLogedID,
        requestedUserID: figurita.props.idUsuario,
        requestedFiguID: figurita.props.id
      })
    )
  }

  async getFiguritasList(
    id: number,
    listType: UserFigusListType
  ): Promise<Figurita[]> {
    const figuritas$ = this.httpClient.get<FiguritaDTO[]>(
      `${API_URL}/user/${id}/lista-figus/${listType}`
    )
    const figuritas = await lastValueFrom(figuritas$)
    return figuritas.map((figuiDTO) => Figurita.fromJson(figuiDTO))
  }

  async getProfileInfo(): Promise<ProfileInfoDTO> {
    const profileInfo$ = this.httpClient.get<ProfileInfoDTO>(
      `${API_URL}/user/${getUserId()}/info-profile`
    )
    return await lastValueFrom(profileInfo$)
  }

  async editProfileInfo(profileInfo: ProfileInfoDTO): Promise<ProfileInfoDTO> {
    const profileInfo$ = this.httpClient.patch<ProfileInfoDTO>(
      `${API_URL}/user/${getUserId()}/info-profile`,
      profileInfo
    )
    //TODO: Hacer algo un poco mas amigable y menos molesto (Posible Toast)
    alert('Se modificó el usuario exitosamente')
    return lastValueFrom(profileInfo$)
  }
}
