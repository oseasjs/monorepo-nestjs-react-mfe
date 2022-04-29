import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
const shared = require('@monorepo-nestjs-react-mfe/shared')

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/repeat-string')
  repeatString(): any {
    const repeatString = JSON.stringify(shared.repeatString('MY VALUE ', 2))
    const replaceString = JSON.stringify(shared.replaceString('Hi Old Value ', 'Old', 'New'))
    const dateFormatted = JSON.stringify(shared.formatDate(new Date()))
    const dateNow = JSON.stringify(shared.dateNow())
    return {
      repeatString,
      replaceString,
      dateFormatted,
      dateNow
    }
  }

  @Get('/application-urls')
  getApplicationUrls(): any {
    return {
      local: {
        homeUrl: 'http://localhost:9020/',
        checkoutUrl: 'http://localhost:9021/',
        searchUrl: 'http://localhost:9022/'
      },
      github: {
        homeUrl: 'https://oseasjs.github.io/module-federation-react/home/',
        checkoutUrl: 'https://oseasjs.github.io/module-federation-react/checkout/',
        searchUrl: 'https://oseasjs.github.io/module-federation-react/search/'
      },
      vercel: {
        homeUrl: 'https://module-federation-react-home.vercel.app/',
        checkoutUrl: 'https://module-federation-react-checkout.vercel.app/',
        searchUrl: 'https://module-federation-react-search.vercel.app/'
      }
    }
  }
}
