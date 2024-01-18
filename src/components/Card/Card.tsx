import Image, { StaticImageData } from "next/image";
import styles from "./Card.module.scss";
import Button from "../Button/Button";
interface Data {
	buttonLabel: string;
	publishDate: string;
	title: string;
	bodyText: string;
	avatar: StaticImageData;
	svgHero: string;
	name: string;
}

const Card = ({
	buttonLabel,
	publishDate,
	title,
	bodyText,
	avatar,
	svgHero,
	name,
}: Data) => {
	return (
		<div className={styles.card}>
			<Image src={svgHero} alt="hero" layout="responsive" />
			<Button buttonLabel={buttonLabel} />

			<div className={styles.cardDate}>{publishDate}</div>
			<div className={styles.cardTitle}>{title}</div>
			<div className={styles.cardBody}>{bodyText}</div>
			<div className={styles.cardAvatar}>
				<Image src={avatar} alt="avatar" width={24} height={24} />
				{name}
			</div>
		</div>
	);
};

export default Card;
