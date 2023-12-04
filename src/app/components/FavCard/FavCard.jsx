import React from "react";
import styles from "./FavCard.module.css";
import Image from "next/image";
import Link from "next/link";
import FavBtn from "../Favorite/favBtn";
import dayjs from "dayjs";

const FavCard = ({ fblog }) => {
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <Image src={fblog.photo_url} alt={fblog.title} fill />
            </div>
            <div className={styles.title}>
                <h1>{fblog.title}</h1>
            </div>
            <div className={styles.subTitle}>
                <p>{fblog.category}</p>
            </div>
            <div className={styles.footer}>
                <div className={styles.read}>
                    <Link href={`/article/${fblog.id}`}>Read Article</Link>
                    <FavBtn blog={fblog} />
                </div>
                <p>{dayjs(fblog.created_at).format("YYYY, MMM DD")}</p>
            </div>
        </div>
    )
}
export default FavCard;