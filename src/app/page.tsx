import Card from "@/components/Card/Card";
import { data } from "../styles/constants";
import styles from "./page.module.scss";
import svgHero from "./../assets/images/illustration-article.svg";
import avatar from "./../assets/images/image-avatar.jpg";

const Home = () => {
	return (
		<div className={styles.main}>
			<Card
				buttonLabel={data.buttonLabel}
				publishDate={data.publishDate}
				title={data.title}
				bodyText={data.bodyText}
				svgHero={svgHero}
				avatar={avatar}
				name={data.name}
			/>
		</div>
	);
};

export default Home;
