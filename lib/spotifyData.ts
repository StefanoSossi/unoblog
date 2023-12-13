import { Artist, Track, Album } from "@prisma/client";
import { queryProps } from "./definitions";

export const getArtistByQuery = async ({
	query,
	limit,
}: queryProps): Promise<Artist[]> => {
	const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=artists&offset=0&limit=${limit}&numberOfTopResults=5`;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "62ccc9859cmshdb90f7143c973ecp12d63bjsn272f69221e92",
			"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const responseData = await response.json();
		const artists = responseData.artists.items.map((result: any) => {
			const artist = {
				uri: result.data.uri,
				profileName: result.data.profile.name,
				avatarImageurl: result.data.visuals.avatarImage.sources[0].url,
			};
			return artist;
		});
		return artists;
	} catch (error) {
		throw new Error("Failed to search by Query");
	}
};

export const getAlbumByQuery = async ({
	query,
	limit,
}: queryProps): Promise<Album[]> => {
	const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=albums&offset=0&limit=${limit}&numberOfTopResults=5`;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "62ccc9859cmshdb90f7143c973ecp12d63bjsn272f69221e92",
			"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const responseData = await response.json();
		const albums = responseData.albums.items.map((result: any) => {
			const album = {
				uri: result.data.uri,
				name: result.data.name,
				coverArtUrl: result.data.coverArt.sources[0].url,
				dateYear: result.data.date.year,
				artistUri: result.data.artists.items[0].uri,
			};
			return album;
		});
		return albums;
	} catch (error) {
		throw new Error("Failed to search by Query");
	}
};

export const getTracksByQuery = async ({
	query,
	limit,
}: queryProps): Promise<Track[]> => {
	const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=tracks&offset=0&limit=${limit}&numberOfTopResults=5`;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "62ccc9859cmshdb90f7143c973ecp12d63bjsn272f69221e92",
			"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const responseData = await response.json();
		const tracks = responseData.tracks.items.map((result: any) => {
			const track = {
				uri: result.data.uri,
				name: result.data.name,
				durationTotalMilliseconds: result.data.duration.totalMilliseconds,
				albumUri: result.data.artists.items[0].uri,
				trackImageUrl: result.data.albumOfTrack.coverArt.sources[0].url,
			};
			return track;
		});
		return tracks;
	} catch (error) {
		throw new Error("Failed to search by Query");
	}
};

/*const searchByQuery = async ({ query, limit }: queryProps): Promise<any> => {
	const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=${limit}&numberOfTopResults=5`;
	const options = {
		method: "GET",
		headers: {
			'X-RapidAPI-Key': '62ccc9859cmshdb90f7143c973ecp12d63bjsn272f69221e92',
			'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		},
	};

	try {
		const response = await fetch(url, options);
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		throw new Error("Failed to search by Query");
	}
};

export const getArtistByQuery = async ({
	query,
	limit,
}: queryProps): Promise<Artist[]> => {
	try {
		const artistsResponse = searchByQuery({querr: query, limit: limit})
		const artists = artistsResponse.artists.items.map((result: any) => {
			const artist = {
				uri: result.data.uri,
				profileName: result.data.profile.name,
				avatarImageurl: result.data.visuals.avatarImage.sources[0].url,
			};
			return artist;
		});
		return artists;
	} catch (error) {
		throw new Error("Failed to search by Query");
	}
};

*/

export const getRecomendations = async (): Promise<Track[]> => {
	const url =
		"https://spotify23.p.rapidapi.com/recommendations/?limit=10&seed_genres=pop%2Calt%2Crock%2Creggae";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "62ccc9859cmshdb90f7143c973ecp12d63bjsn272f69221e92",
			"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const responseData = await response.json();
		const tracks = responseData.tracks.map((result: any) => {
			const track = {
				uri: result.uri,
				name: result.name,
				durationTotalMilliseconds: result.duration_ms,
				albumUri: result.album.uri,
				trackImageUrl: result.album.images[0].url,
			};
			return track;
		});
		return tracks;
	} catch (error) {
		throw new Error("Failed to get Recommendations");
	}
};
