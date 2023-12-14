"use client";
import { useState } from "react";
import styles from "./Search.module.css";
import SearchBar from "../searchBar/SearchBar";
import EntertainingCard from "../entertainingCard/EntertainingCard";
import { TracksData } from "@/lib/definitions";

interface Props {
	recomendedTracks: TracksData[];
}

const Search = (props: Props) => {
	const [selectedTrack, setSelectedTrack] = useState(props.recomendedTracks[0]);

	return (
		<>
			<h1 className={styles.header}>Find your wave</h1>
			<div className={styles.container}>
				<SearchBar
					recomendedTracks={props.recomendedTracks}
					selectedTrack={selectedTrack}
					setSelectedTrack={setSelectedTrack}
				></SearchBar>
				<EntertainingCard track={selectedTrack}></EntertainingCard>
			</div>
		</>
	);
};

export default Search;
