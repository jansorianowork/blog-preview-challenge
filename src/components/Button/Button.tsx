import React from "react";
import styles from "./Button.module.scss";

type props = {
	buttonLabel: string;
};

function Button({ buttonLabel }: props) {
	return (
		<button className={[styles.btn, styles.btnPrimary].join(" ")}>
			{buttonLabel}
		</button>
	);
}

export default Button;
