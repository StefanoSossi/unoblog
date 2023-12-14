import { Post } from "@prisma/client";

export type Theme = "light" | "dark";

export type PaginatedPostsResponse = {
	posts: Post[];
	pagination: {
		totalPages: number;
		currentPage: number;
		offset: number;
		limit: number;
		hasPrev: boolean;
		hasNext: boolean;
	};
};

export type Menu = {
	id: string;
	title: string;
};

export type queryProps = {
	query: string;
	limit: number;
};

export type TracksData = {
	id: string;
	uri: string;
	name: string;
	durationTotalMilliseconds: number;
	albumUri: string;
	trackImageUrl: string;
};
