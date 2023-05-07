import { FC } from "react";
import styles from "@styles/partials/games/Card.module.scss";

interface Props {
  title: string;
  discription: string;
  src: string;
}

const Card: FC<Props> = ({ title, discription, src }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.discription}>{discription}</div>
    </div>
  );
};
