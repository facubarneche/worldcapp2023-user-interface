import {HttpClient} from '@angular/common/http'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {
  UserLoginResponseDTO,
  UserLoginDTO,
  UserFigusListType,
  UserProfileInfoDTO,
  UserInfoDTO
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

  async getFiguritasList(listType: UserFigusListType): Promise<Figurita[]> {
    const figuritas$ = this.httpClient.get<FiguritaDTO[]>(
      `${API_URL}/user/${getUserId()}/lista-figus/${listType}`
    )
    const figuritas = await lastValueFrom(figuritas$)
    return figuritas.map((figuiDTO) => Figurita.fromJson(figuiDTO))
  }

  async getGiftableFigurita(userID: number, cardID: number): Promise<Figurita> {
    const card$ = this.httpClient.get<FiguritaDTO>(
      `${API_URL}/user/get-figurita-intercambio/${userID}/${cardID}`
    )
    const card = await lastValueFrom(card$)
    return Figurita.fromJson(card)
  }

  async getProfileInfo(): Promise<UserProfileInfoDTO> {
    const profileInfo$ = this.httpClient.get<UserProfileInfoDTO>(
      `${API_URL}/user/${getUserId()}/info-profile`
    )
    return await lastValueFrom(profileInfo$)
  }

  async editProfileInfo(
    profileInfo: UserProfileInfoDTO
  ): Promise<UserProfileInfoDTO> {
    const profileInfo$ = this.httpClient.patch<UserProfileInfoDTO>(
      `${API_URL}/user/${getUserId()}/info-profile`,
      profileInfo
    )
    return lastValueFrom(profileInfo$)
  }

  getUserInfo(): Promise<UserInfoDTO> {
    const userInfo$ = this.httpClient.get<UserInfoDTO>(
      `${API_URL}/user/${getUserId()}/user-info`
    )

    return lastValueFrom(userInfo$)
  }

  async editUsername(userInfo: UserInfoDTO): Promise<UserInfoDTO> {
    const editInfo$ = this.httpClient.patch<UserInfoDTO>(
      `${API_URL}/user/${getUserId()}/user-info`,
      userInfo
    )
    return lastValueFrom(editInfo$)
  }
}
