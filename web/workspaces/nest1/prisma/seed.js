import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	await prisma.post.deleteMany()
	await prisma.user.deleteMany()
	await prisma.profile.deleteMany()
	await prisma.tag.deleteMany()

	// const firstStore = await prisma.store.create({
	// 	data: {
	// 		address: 'adresssss',
	// 		storeName: 'firstshop',
	// 	},
	// })
	for (let i = 0; i < 5; i++) {
		const user = await prisma.user.create({
			data: {
				email: `email${i + 1}`,
				name: `user${i + 1}`,
			},
		})
		console.log({ user })

		const post = await prisma.post.create({
			data: {
				title: `post${i + 1}`,
				authorId: i + 1,
				content: 'awdaddwvfvfb',
			},
		})
		console.log({ post })

		const profile = await prisma.profile.create({
			data: {
				bio: `bio${i + 1}`,
				userId: i + 1,
			},
		})

		console.log({ profile })

		const tag = await prisma.tag.create({
			data: {
				name: `tag${i + 1}`,
			},
		})

		console.log({ tag })

		const post2tags =
			await prisma.$executeRaw`INSERT INTO _TagPostRelation (A,B)
		VALUES( ${i + 1},${i + 1});`

		console.log({ post2tags })
	}

	// const firstShop = await prisma.shop.create({
	// 	data: {
	// 		address: 'some intresting adress',
	// 		shopName: 'first shop',
	// 	},
	// })

	// const coffe = await prisma.product.create({
	// 	data: {
	// 		count: 5,
	// 		price: 20,
	// 		productName: 'coffe',
	// 		type: 'water',
	// 		// deliveryDate: new Date('05.05.2022'),
	// 		// expirationDate: new Date('05.05.2022'),
	// 		shopId: 1,
	// 	},
	// })

	// const candy = await prisma.product.create({
	// 	data: {
	// 		count: 5,
	// 		price: 20,
	// 		productName: 'candy',
	// 		type: 'candy',
	// 		// deliveryDate: new Date('05.05.2022'),
	// 		// expirationDate: new Date('05.05.2022'),
	// 		shopId: 1,
	// 	},
	// })

	// const fish = await prisma.product.create({
	// 	data: {
	// 		count: 5,
	// 		price: 20,
	// 		productName: 'fish',
	// 		type: 'seafood',
	// 		// deliveryDate: '05.05.2022',
	// 		// expirationDate: '05.05.2022',
	// 		shopId: 1,
	// 	},
	// })

	// const alice = await prisma.donation.create({
	// 	data: {
	// 		email: 'alisce@prisma.io',
	// 		displayName: 'Alice',
	// 		count: 5,
	// 	},
	// })

	// console.log({ alice, fish, firstStore, coffe, candy })
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
