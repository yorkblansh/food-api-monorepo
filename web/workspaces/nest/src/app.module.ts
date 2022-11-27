import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import {} from 'apollo-server-express'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
// import { DonationsResolver } from './donations/donations.resolver'
// import { DonationsModule } from './donations/donations.module'
// import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground'
// import { ProductModule } from './product/product.module'
// import { StoreModule } from './store/store.module';
import { UserModule } from './user/user.module'
import { PostModule } from './post/post.module'
import { ProfileModule } from './profile/profile.module'
import { TagModule } from './tag/tag.module'
import { RoleModule } from './role/role.module'
import { AuthModule } from './auth/auth.module'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			// plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
			playground: true,
			typePaths: ['./**/*.graphql'],
			subscriptions: {
				'graphql-ws': true,
				'subscriptions-transport-ws': true,
			},
		}),
		UserModule,
		PostModule,
		ProfileModule,
		TagModule,
		RoleModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
