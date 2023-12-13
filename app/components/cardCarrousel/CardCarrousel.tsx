"use client";
import React, { useRef } from "react";
import TopCard from "../topCard/TopCard";
import styles from "./CardCarrousel.module.css";

interface CardCarrouselImage {
	uri: string;
	name: string;
	durationTotalMilliseconds: number;
	albumUri: string;
	trackImageUrl: string;
}
interface Props {
	recomendedTracks: CardCarrouselImage[];
}

const CardCarrousel = (props: Props) => {
	let dataMouseDownAt = useRef(0);
	let prevPercentage = useRef(0);
	let actualPercentage = 0;

	window.onmousedown = (e) => {
		dataMouseDownAt.current = e.clientX;
	};

	window.onmouseup = () => {
		dataMouseDownAt.current = 0;
		prevPercentage.current = actualPercentage;
	};

	window.onmousemove = (e) => {
		if (dataMouseDownAt.current === 0) return;

		const mouseDelta = dataMouseDownAt.current - e.clientX,
			maxDelta = window.innerWidth / 2;
		const percentage = (mouseDelta / maxDelta) * -100,
			nextPercentageUnconstrained = prevPercentage.current + percentage,
			nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -60);

		actualPercentage = nextPercentage;
		document.documentElement.style.setProperty(
			"--translateX",
			`${nextPercentage}%`
		);
		document.documentElement.style.setProperty(
			"--translateXPosition",
			`${nextPercentage + 100}%`
		);
	};
	return (
		<div
			className={styles.image_track}
			data-mousedownat={dataMouseDownAt}
			data-prevpercentage={prevPercentage}
		>
			{props.recomendedTracks.map((image: any) => {
				return (
					<TopCard
						src={image.trackImageUrl}
						key={image.uri}
						name={image.name}
					></TopCard>
				);
			})}
		</div>
	);
};

export default CardCarrousel;
