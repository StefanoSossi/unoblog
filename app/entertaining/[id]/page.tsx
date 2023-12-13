import CardCarrousel from "../../components/cardCarrousel/CardCarrousel";
import styles from "./Entertaining.module.css";
import { menues } from "@/lib/placeholder-data";
import { getRecomendations } from "@/lib/spotifyData";

const Entertaining = async ({ params }: any) => {
	const menu = menues.find((menu) => menu.id === params.id);
	console.log("param", params);
	let top5Recommended = [
		{
			id: "1",
			uri: "spotify:track:2z75GXka50vxEA2EgegDFu",
			name: "Soul Provider",
			durationTotalMilliseconds: 259035,
			albumUri: "spotify:album:2aIi7zcKycJgK5kbcybCS4",
			trackImageUrl:
				"https://i.scdn.co/image/ab67616d0000b2730308be1abf439fdbda474876",
		},
		{
			id: "2",
			uri: "spotify:track:2n5gVJ9fzeX2SSWlLQuyS9",
			name: "Fight Night",
			durationTotalMilliseconds: 216247,
			albumUri: "spotify:album:56PJDByaunMWwCqs5rV3Nc",
			trackImageUrl:
				"https://i.scdn.co/image/ab67616d0000b273e99baa1bd4b60deadf326a76",
		},
		{
			id: "3",
			uri: "spotify:track:5eReOqbysgLsqGp2ukMUYp",
			name: "Unconditional Love",
			durationTotalMilliseconds: 259035,
			albumUri: "spotify:album:6OS1TLLI7MdjPWor9aQhYz",
			trackImageUrl:
				"https://i.scdn.co/image/ab67616d0000b273792ac806d7b6644e95aeed52",
		},
		{
			id: "4",
			uri: "spotify:track:0n2SEXB2qoRQg171q7XqeW",
			name: "Smooth (feat. Rob Thomas)",
			durationTotalMilliseconds: 294986,
			albumUri: "spotify:album:10aiDpdFGyfCFEcqpx6XTq",
			trackImageUrl:
				"https://i.scdn.co/image/ab67616d0000b27347eb3ea5a92904c19e102e54",
		},
		{
			id: "5",
			uri: "spotify:track:1Xk3Fu1iP15qLMejbg6ozz",
			name: "Bossman",
			durationTotalMilliseconds: 218040,
			albumUri: "spotify:album:4s1XAUcu5kD6EMHK2kyVTG",
			trackImageUrl:
				"https://i.scdn.co/image/ab67616d0000b273cae9083ccaabca190d540916",
		},
	];
	const recomendedTracks = await getRecomendations();
	top5Recommended = recomendedTracks.slice(0, 5);

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Top 5 {menu?.title} this week</h1>
			<CardCarrousel recomendedTracks={top5Recommended}></CardCarrousel>
		</div>
	);
};

export default Entertaining;
