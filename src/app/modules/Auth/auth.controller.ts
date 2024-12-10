import { Request, Response } from 'express'
import httpStatus from 'http-status'

import { IRefreshTokenResponse } from './auth.interface'
import { AuthService } from './auth.service'
import { catchAsync } from '../../../utils/catchAsync'
import configs from '../../../configs'
import sendResponse from '../../../utils/responseHandler'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body
  const result = await AuthService.loginUser(loginData)

  const { refreshToken, ...others } = result
  const options = {
    secure: configs.env === 'production',
    httpOnly: true,
  }
  res.cookie('refreshToken', refreshToken, options)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully !',
    data: others,
  })
})

const refreshTokenController = catchAsync(
  async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies

    const result = await AuthService.refreshTokenService(refreshToken)

    sendResponse<IRefreshTokenResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New access token generated successfully !',
      data: result,
    })
  },
)

export const AuthController = {
  loginUser,
  refreshTokenController,
}
