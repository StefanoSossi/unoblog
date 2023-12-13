import styles from "./TopCard.module.css";
import Image from "next/image";

const HandleClick = () => {
	console.log("you clickme");
};
const TopCard = ({ src, name }: { src: string; name: string }) => {
	return (
		<>
			<div className={styles.card}>
				<div className={styles.imageContainer}>
					<Image
						className={styles.image}
						alt="Track cover"
						src={src}
						fill
						sizes=" (max-width: 768px) 56vmin"
						onDoubleClick={() => HandleClick()}
					></Image>
				</div>
				<div className={styles.author}>{name}</div>
			</div>
		</>
	);
};

export default TopCard;
