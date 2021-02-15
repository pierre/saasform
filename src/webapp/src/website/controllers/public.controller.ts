import {
  Controller,
  Get,
  Request,
  Res,
  UseGuards
  //   Param
} from '@nestjs/common'
import { Response } from 'express'
import { SettingsService } from '../../settings/settings.service'
import { UserOptionalAuthGuard } from '../..//auth/auth.guard'

@Controller()
export class PublicController {
  constructor (
    private readonly settingsService: SettingsService
  ) {}

  @UseGuards(UserOptionalAuthGuard)
  @Get('/')
  async getHome (@Request() req, @Res() res: Response): Promise<any> {
    const data = await this.settingsService.getWebsiteRenderingVariables()
    const user = req.user != null ? req.user : {}

    const pageData = {
      ...data,
      csrfToken: req.csrfToken(),
      user
    }

    return res.render(`${data.themeRoot as string}/index-sso`, pageData)
  }
}
