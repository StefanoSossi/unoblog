"use client";
import { useMemo, useState } from "react";
import { Combobox } from "@headlessui/react";
import styles from "./SearchBar.module.css";
import { TracksData } from "@/lib/definitions";

interface Props {
	recomendedTracks: TracksData[];
	selectedTrack: TracksData;
	setSelectedTrack: (track: TracksData) => void;
}

const SearchBar = (props: Props) => {
	const [query, setQuery] = useState("");

	const filterTodo = useMemo(() => {
		const filteredPeople =
			query === ""
				? props.recomendedTracks
				: props.recomendedTracks.filter((track) => {
						return track.name.toLowerCase().includes(query.toLowerCase());
				  });
		return filteredPeople;
	}, [query]);

	/*const handleOnChangeComboBox = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log("tracksIndexed");
		const tracksIndexed = props.recomendedTracks.reduce(
			(accumulated: any, current: any) => {
				accumulated[current.name] = current;
				return accumulated;
			},
			{}
		);
		console.log("tracksIndexed", tracksIndexed);
	};*/

	return (
		<>
			<div className={styles.container}>
				<Combobox
					value={props.selectedTrack}
					onChange={props.setSelectedTrack}
					data-testid="searchselectoption"
				>
					<div className={styles.subcontainer}>
						<Combobox.Input
							className={styles.input}
							data-testId="searchInput"
							placeholder="Track Name"
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Options className={styles.container_options}>
							{filterTodo.map((track) => (
								<Combobox.Option
									className={styles.options}
									key={track.uri}
									value={track}
								>
									{track.name}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</div>
				</Combobox>
			</div>
		</>
	);
};

export default SearchBar;
