const status = "authenticated";

const categories = [
	{
		id: "1",
		title: "JavaScript",
		slug: "javascript",
		color: "#ffb04f45",
	},
	{
		id: "2",
		title: "Prisma",
		slug: "prisma",
		color: "#7fb88133",
	},
	{
		id: "3",
		title: "Next JS",
		slug: "next-js",
		color: "#d1d1d1",
	},
	{
		id: "4",
		title: "Next Auth",
		slug: "next-auth",
		color: "#5e4fff31",
	},
	{
		id: "5",
		title: "MongoDB",
		slug: "mongodb",
		color: "#adf7b6",
	},
	{
		id: "6",
		title: "React JS",
		slug: "react-js",
		color: "#61dafb",
	},
];

const posts = [
	{
		id: "p-1",
		createdAt: new Date("2021-01-01"),
		slug: "next-js",
		title: "Next JS",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
		img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702391820/nqethq3gzldpty0xmkw3.jpg",
		views: 100,
		catSlug: "next-js",
		userEmail: "tenosossi2012@gmail.com",
	},
	{
		id: "p-2",
		createdAt: new Date("2021-01-01"),
		slug: "next-js-with-prisma",
		title: "Next JS with Prisma",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
		img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702275296/swz5vbykpoiilhgmwtus.webp",
		views: 100,
		catSlug: "prisma",
		userEmail: "tenosossi2012@gmail.com",
	},
	{
		id: "p-3",
		createdAt: new Date("2021-01-01"),
		slug: "next-js",
		title: "Next JS",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
		img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702391820/nqethq3gzldpty0xmkw3.jpg",
		views: 100,
		catSlug: "next-js",
		userEmail: "tenosossi2012@gmail.com",
	},
	{
		id: "p-4",
		createdAt: new Date("2021-01-01"),
		slug: "next-js-with-prisma",
		title: "Next JS with Prisma",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
		img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702275296/swz5vbykpoiilhgmwtus.webp",
		views: 100,
		catSlug: "prisma",
		userEmail: "tenosossi2012@gmail.com",
	},
	{
		id: "p-5",
		createdAt: new Date("2021-01-01"),
		slug: "next-js",
		title: "Next JS",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
		img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702391820/nqethq3gzldpty0xmkw3.jpg",
		views: 100,
		catSlug: "next-js",
		userEmail: "tenosossi2012@gmail.com",
	},
	{
		id: "p-6",
		createdAt: new Date("2021-01-01"),
		slug: "next-js-with-prisma",
		title: "Next JS with Prisma",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
		img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702275296/swz5vbykpoiilhgmwtus.webp",
		views: 100,
		catSlug: "prisma",
		userEmail: "tenosossi2012@gmail.com",
	},
	{
		id: "p-7",
		createdAt: new Date("2021-01-01"),
		slug: "next-js",
		title: "Next JS",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
		img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702391820/nqethq3gzldpty0xmkw3.jpg",
		views: 100,
		catSlug: "next-js",
		userEmail: "tenosossi2012@gmail.com",
	},
	{
		id: "p-8",
		createdAt: new Date("2021-01-01"),
		slug: "next-js-with-prisma",
		title: "Next JS with Prisma",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
		img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702275296/swz5vbykpoiilhgmwtus.webp",
		views: 100,
		catSlug: "prisma",
		userEmail: "tenosossi2012@gmail.com",
	},
];

const tracks = [
	{
		id: "t-1",
		slug: "spotify:track:2z75GXka50vxEA2EgegDFu",
		name: "Soul Provider",
		durationTotalMilliseconds: 259035,
		albumslug: "spotify:album:2aIi7zcKycJgK5kbcybCS4",
		trackImageUrl:
			"https://i.scdn.co/image/ab67616d0000b2730308be1abf439fdbda474876",
	},
	{
		id: "t-2",
		slug: "spotify:track:2n5gVJ9fzeX2SSWlLQuyS9",
		name: "Fight Night",
		durationTotalMilliseconds: 216247,
		albumslug: "spotify:album:56PJDByaunMWwCqs5rV3Nc",
		trackImageUrl:
			"https://i.scdn.co/image/ab67616d0000b273e99baa1bd4b60deadf326a76",
	},
	{
		id: "t-3",
		slug: "spotify:track:5eReOqbysgLsqGp2ukMUYp",
		name: "Unconditional Love",
		durationTotalMilliseconds: 259035,
		albumslug: "spotify:album:6OS1TLLI7MdjPWor9aQhYz",
		trackImageUrl:
			"https://i.scdn.co/image/ab67616d0000b273792ac806d7b6644e95aeed52",
	},
	{
		id: "t-4",
		slug: "spotify:track:0n2SEXB2qoRQg171q7XqeW",
		name: "Smooth (feat. Rob Thomas)",
		durationTotalMilliseconds: 294986,
		albumslug: "spotify:album:10aiDpdFGyfCFEcqpx6XTq",
		trackImageUrl:
			"https://i.scdn.co/image/ab67616d0000b27347eb3ea5a92904c19e102e54",
	},
	{
		id: "t-5",
		slug: "spotify:track:1Xk3Fu1iP15qLMejbg6ozz",
		name: "Bossman",
		durationTotalMilliseconds: 218040,
		albumslug: "spotify:album:4s1XAUcu5kD6EMHK2kyVTG",
		trackImageUrl:
			"https://i.scdn.co/image/ab67616d0000b273cae9083ccaabca190d540916",
	},
];

const albums = [
	{
		id: "a-1",
		slug: "spotify:album:53fJVD9LpBKEMqdAF7PW5K",
		name: "Christmas (Deluxe Special Edition)",
		coverArtUrl:
			"https://i.scdn.co/image/ab67616d00001e022ead7786631d8dd3b59be4f0",
		dateYear: 2011,
		artistslug: "spotify:artist:1GxkXlMwML1oSg5eLPiAz3",
	},
	{
		id: "a-2",
		slug: "spotify:album:3SpBlxme9WbeQdI9kx7KAV",
		name: "Certified Lover Boy",
		coverArtUrl:
			"https://i.scdn.co/image/ab67616d00001e02cd945b4e3de57edd28481a3f",
		dateYear: 2021,
		artistslug: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
	},
	{
		id: "a-3",
		slug: "spotify:album:6vBGI5522jvPi0ZZuGQNp4",
		name: "The Christmas Song (Expanded Edition)",
		coverArtUrl:
			"https://i.scdn.co/image/ab67616d00001e0230dc6027fd140c7ba68e900c",
		dateYear: 1962,
		artistslug: "spotify:artist:7v4imS0moSyGdXyLgVTIV7",
	},
	{
		id: "a-4",
		slug: "spotify:album:4u40K47aUMjeNrPGmQrodQ",
		name: "Dr. Seuss' The Grinch (Original Motion Picture Soundtrack)",
		coverArtUrl:
			"https://i.scdn.co/image/ab67616d00001e02940b54f90834834dfbc53da1",
		dateYear: 2018,
		artistslug: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
	},
	{
		id: "a-5",
		slug: "spotify:album:76290XdXVF9rPzGdNRWdCh",
		name: "Ctrl",
		coverArtUrl:
			"https://i.scdn.co/image/ab67616d00001e024c79d5ec52a6d0302f3add25",
		dateYear: 2017,
		artistslug: "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP",
	},
];

const artists = [
	{
		id: "aa-1",
		slug: "spotify:artist:15UsOTVnJzReFVN1VCnxy4",
		profileName: "XXXTENTACION",
		avatarImageurl:
			"https://i.scdn.co/image/ab6761610000e5ebf0c20db5ef6c6fbe5135d2e4",
	},
	{
		id: "aa-2",
		slug: "spotify:artist:7bXgB6jMjp9ATFy66eO08Z",
		profileName: "Chris Brown",
		avatarImageurl:
			"https://i.scdn.co/image/ab6761610000e5eba48397e590a1c70e2cda7728",
	},
	{
		id: "aa-3",
		slug: "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5",
		profileName: "J. Cole",
		avatarImageurl:
			"https://i.scdn.co/image/ab6761610000e5ebadd503b411a712e277895c8a",
	},
	{
		id: "aa-4",
		slug: "spotify:artist:13ZEDW6vyBF12HYcZRr4EV",
		profileName: "Tyler Childers",
		avatarImageurl:
			"https://i.scdn.co/image/ab6761610000e5eb3b3bb0d677529cd524eadfdc",
	},
	{
		id: "aa-5",
		slug: "spotify:artist:4YLtscXsxbVgi031ovDDdh",
		profileName: "Chris Stapleton",
		avatarImageurl:
			"https://i.scdn.co/image/ab6761610000e5eba0c87c8f329b436eac8b9784",
	},
];

const menues = [
	{
		id: "music",
		title: "Music",
	},
	{
		id: "movie",
		title: "Movies",
	},
	{
		id: "book",
		title: "Books",
	},
];

module.exports = {
	status,
	categories,
	posts,
	tracks,
	albums,
	artists,
	menues,
};
