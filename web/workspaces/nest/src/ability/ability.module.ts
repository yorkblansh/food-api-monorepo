import { Module } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { UserModule } from '../user/user.module'
import { AbilityFactory } from './ability.factory'

@Module({
	// imports: [UserModule],
	// providers: [AbilityFactory],
	// exports: [AbilityFactory],
})
export class AbilityModule {}
