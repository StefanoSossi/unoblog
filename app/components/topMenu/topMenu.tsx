"use client";
import CardCarrousel from "../cardCarrousel/CardCarrousel";
import styles from "./Movies.module.css";

const TopMenu = () => {
	const images = [
		{
			id: "1",
			src: "https://images.unsplash.com/photo-1702288140268-608468d2d9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
		},
		{
			id: "2",
			src: "https://images.unsplash.com/photo-1702276125956-18295ebdb086?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
		},
		{
			id: "3",
			src: "https://images.unsplash.com/photo-1682685797527-63b4e495938f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
		},
		{
			id: "4",
			src: "https://images.unsplash.com/photo-1701452416423-bffb43815f87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
		},
		{
			id: "5",
			src: "https://images.unsplash.com/photo-1702234766317-77959fd33cad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Top 5 this week</h1>
			<CardCarrousel images={images}></CardCarrousel>
		</div>
	);
};

export default TopMenu;
