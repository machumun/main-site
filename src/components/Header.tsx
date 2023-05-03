import { NextPage } from "next";
import style from "@styles/Header.module.scss";
import Link from "next/link";

interface Props {
  title: string;
}

const contents = [
  { title: "games", path: "/games" },
  { title: "gallery", path: "/gallery" },
];

const Header: NextPage<Props> = ({ title }) => {
  return (
    <div className={style.header}>
      <h1 className="title">MACHUMUN.com</h1>
      <div className={style["contents-wrapper"]}>
        {contents.map((content) => {
          return (
            <div className={style["contents-link"]}>
              <Link href={content.path}>
                <h2>{content.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
