import styles from "./EntertainingCard.module.css";
import Card from "react-bootstrap/Card";
import { TracksData } from "@/lib/definitions";

interface Props {
	track: TracksData;
}

const EntertainingCard = (props: Props) => {
	return (
		<>
			<Card className={styles.card}>
				<Card.Img
					variant="bottom"
					className={styles.image}
					src={props.track.trackImageUrl}
				/>
				<Card.Body className={styles.body}>
					<Card.Title className={styles.title} data-testid="searchselecttitle">
						<b>{props.track.name}</b>
					</Card.Title>
					<Card.Text className={styles.text}>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Card.Text>
						Duration of track:{" "}
						{new Date(props.track.durationTotalMilliseconds)
							.toISOString()
							.slice(11, 19)}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default EntertainingCard;
