import { NextPage } from "next";
import style from "@styles/Header.module.scss";
import Link from "next/link";

interface Props {
  title: string;
}

const Header: NextPage<Props> = ({ title }) => {
  return (
    <div className={style.header}>
      <h1 className="title">MACHUMUN</h1>
      <Link href="/gallery">
        <h2>Gallery</h2>
      </Link>
    </div>
  );
};

export default Header;
