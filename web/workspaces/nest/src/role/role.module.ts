import { Module } from '@nestjs/common'
import { RoleService } from './role.service'
import { RoleResolver } from './role.resolver'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
	providers: [RoleResolver, RoleService, PrismaService],
})
export class RoleModule {}