import { Module } from '@nestjs/common'
import { StoreService } from './store.service'
import { StoreResolver } from './store.resolver'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
	providers: [StoreResolver, StoreService, PrismaService],
})
export class StoreModule {}
