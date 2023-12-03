"use client";
import { useState, useEffect } from "react";
import { useStore } from "../store";
import { styles } from "./page.module.css";
import { Header } from "../components/Header/header";
import { Container } from "../components/container/container";
import { FavCard } from "../components/FavCard/FavCard";
import { Footer } from "../components/footer/footer";

export default function Favorite() {
    const { favorite, setFavorite } = useStore();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let fav = localStorage.getItem("blog-fav");
        if (fav) {
            setFavorite(JSON.parse(fav));
        }
        console.log("Favorite:", favorite);
    }, []);
    return (
        <main className={styles.home}>
            <Header />
            <div className={styles.cover}>
                <div className={styles.overlay}>
                    <div className={styles.title}>
                        <Container>
                            <h1>Favorite Blog.</h1>
                            <p>this is your favorite blogs</p>
                        </Container>
                    </div>
                </div>
            </div>
            <div className={styles.over}>
                <Container>
                    <div className={styles.cardContainer}>
                        {loading === true && <span className={styles.loader}>Empty</span>}
                        {favorite.map((fblog, index) => (
                            <FavCard fblog={fblog} key={index} />
                        ))}
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    )

}