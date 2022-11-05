import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
// import { BotModule } from './bot/bot.module'
// import { BotService } from './bot/bot.service'
import { ProductModule } from './product/product.module'

import { ShopModule } from './shop/shop.module'

import graphqlIsoDate from 'graphql-iso-date'
const { GraphQLDateTime } = graphqlIsoDate

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			// plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
			playground: true,
			typePaths: ['./**/*.graphql'],
			resolvers: { DateTime: GraphQLDateTime },
			subscriptions: {
				'graphql-ws': true,
				'subscriptions-transport-ws': true,
			},
		}),
		ProductModule,
		ShopModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
