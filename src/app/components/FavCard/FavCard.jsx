import React from "react";
import styles from "./FavCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { FavBtn2 } from "../Favorite2/favBtn2";
import dayjs from "dayjs";

export const FavCard = ({ blog }) => {
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <Image src={blog.photo_url} alt={blog.title} fill />
            </div>
            <div className={styles.title}>
                <h1>{blog.title}</h1>
            </div>
            <div className={styles.subTitle}>
                <p>{blog.category}</p>
            </div>
            <div className={styles.footer}>
                <div className={styles.read}>
                    <Link href={`/article/${fblog.id}`}>Read Article</Link>
                    <FavBtn2 blog={blog} />
                </div>
                <p>{dayjs(blog.created_at).format("YYYY, MMM DD")}</p>
            </div>
        </div>
    )
}