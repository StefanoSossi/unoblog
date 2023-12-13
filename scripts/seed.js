const { PrismaClient } = require("@prisma/client");
const {
	categories,
	posts,
	tracks,
	albums,
	artists,
} = require("../lib/placeholder-data");

const prisma = new PrismaClient();

async function main() {
	console.log(`Start seeding ...`);
	for (const category of categories) {
		const categoryExists = await prisma.category.findUnique({
			where: { slug: category.slug },
		});

		if (!categoryExists) {
			await prisma.category.create({
				data: category,
			});
			console.log(`Created category with slug: ${category.slug}`);
		}
	}

	for (const post of posts) {
		const postExists = await prisma.post.findUnique({
			where: { slug: post.slug },
		});

		if (!postExists) {
			await prisma.post.create({
				data: post,
			});
			console.log(`Created post with slug: ${post.slug}`);
		}
	}

	for (const track of tracks) {
		const trackExists = await prisma.track.findUnique({
			where: { slug: track.slug },
		});

		if (!trackExists) {
			await prisma.track.create({
				data: track,
			});
			console.log(`Created track with slug: ${track.slug}`);
		}
	}

	for (const album of albums) {
		const albumExists = await prisma.album.findUnique({
			where: { slug: album.slug },
		});

		if (!albumExists) {
			await prisma.album.create({
				data: album,
			});
			console.log(`Created album with slug: ${album.slug}`);
		}
	}

	for (const artist of artists) {
		const artistExists = await prisma.artist.findUnique({
			where: { slug: artist.slug },
		});

		if (!artistExists) {
			await prisma.artist.create({
				data: artist,
			});
			console.log(`Created artist with slug: ${artist.slug}`);
		}
	}

	console.log(`Seeding finished.`);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
