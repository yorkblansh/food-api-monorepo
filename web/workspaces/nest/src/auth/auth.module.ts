import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '../user/user.module'
import { AuthService } from './auth.service'
import { jwtConstants } from './constants'
import { RolesGuard } from './guards/roles.guard'
import { JwtStrategy } from './strategies/jwt.strategy'
import { LocalStrategy } from './strategies/local.strategy'
import 'dotenv/config'
import { env } from 'process'
import { AuthResolver } from './auth.resolver'
import { UserService } from '../user/user.service'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.register({
			secret: jwtConstants.secret,
			signOptions: {
				expiresIn: 20000,
				// process.env.jwtExpire
			},
		}),
	],
	providers: [
		PrismaService,
		UserService,
		AuthResolver,
		AuthService,
		LocalStrategy,
		JwtStrategy,
	],
	exports: [AuthService],
})
export class AuthModule {}
