import httpStatus from 'http-status'
import jwt, { Secret } from 'jsonwebtoken'

import { IRefreshTokenResponse, IUserLogin } from './auth.interface'
import { ApiError } from '../../../errors/ApiErrors'
import { User } from '../User/user.model'
import configs from '../../../configs'
import { jwtHelpers } from '../../../helpers/jwtHelpers'

const loginUser = async (payload: IUserLogin) => {
  const { email: emailId, password } = payload

  // check user exist
  const isUserExists = await User.isUserExists(emailId)

  if (!isUserExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User does not exist')
  }

  //matched password
  if (
    isUserExists?.password &&
    !(await User.isPasswordMatched(password, isUserExists?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  const { role, email } = isUserExists

  // create access token
  const accessToken = jwt.sign(
    {
      email: isUserExists.email,
      role: isUserExists.role,
    },
    configs.jwt.secret as Secret,
    {
      expiresIn: configs.jwt.secret_expire_in,
    }
  )

  const refreshToken = jwtHelpers.createToken(
    { email, role },
    configs.jwt.refresh_secret as Secret,
    configs.jwt.refresh_secret_expire_in as string
  )

  return {
    accessToken,
    refreshToken,
    emailId,
    role,
  }
}

const refreshTokenService = async (
  token: string
): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      configs.jwt.refresh_secret as Secret
    )
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token')
  }

  //checking deleted user refresh token
  const { phoneNumber } = verifiedToken

  const isUserExists = await User.isUserExists(phoneNumber)
  if (!isUserExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User does not exist')
  }

  //generate new token
  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExists.phoneNumber,
      role: isUserExists.role,
    },
    configs.jwt.secret as Secret,
    configs.jwt.secret_expire_in as string
  )
  return {
    accessToken: newAccessToken,
  }
}
export const AuthService = {
  loginUser,
  refreshTokenService,
}
