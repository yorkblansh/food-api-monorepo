import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { PrismaService } from '../../prisma/prisma.service'
import { AbilityModule } from '../ability/ability.module'
import { AbilityFactory } from '../ability/ability.factory'

@Module({
	// imports: [AbilityModule],
	providers: [UserResolver, UserService, PrismaService],
})
export class UserModule {}
