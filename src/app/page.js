"use client";
import { useRef } from "react";
import { Steps, Hints } from "intro.js-react";

import { Container } from "./components/container/container";
import { Header } from "./components/Header/header";
import styles from "./page.module.css";
import { Card } from "./components/card/card";
import { Footer } from "./components/footer/footer";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SkeletonCard } from "./components/skeleton/skeleton";
// import Joyride from "react-joyride";
import "intro.js/introjs.css";
import { useStore } from "./store";

export default function Home() {
  const cardIntroRef = useRef();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const {setFavorite} =useStore();

  const steps = [
    {
      element: ".selector1",
      intro: "Welcome This is my simple blog!",
    },
    {
      element: ".selector2",
      intro: "This is title",
    },
    {
      element: ".card-div",
      intro: "The blog posts here..!",
    },
  ];

  const getBlogs = () => {
    fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?limit=12&offset=${skip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setList((prevList) => [...prevList, ...data.blogs]);
        setTotal(data.total_blogs);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBlogs();
  }, [skip]);

  useEffect(() => {
    let fav = localStorage.getItem("blog-fav");
    if (fav) setFavorite(JSON.parse(fav));
  }, []);

  return (
    <main className={styles.home}>
      <Header />
      <Steps
        enabled={!loading}
        steps={steps}
        initialStep={0}
        onExit={() => console.log("exit")}
      />

      <div className={styles.cover}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.title}>
              <h1 className="selector1">Simple Blog.</h1>
              <p className="selector2">A blog created by Aon 2023</p>
            </div>
          </Container>
        </div>
      </div>
      <div className={styles.main}>
        <Container>
          {loading && (
            <div className={styles.grid}>
              {[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}
          {!loading && (
            <InfiniteScroll
              dataLength={list.length}
              next={() => setSkip(skip + 12)}
              hasMore={list.length < total ? true : false}
              className={styles.over}
              endMessage={
                <p style={{ textAlign: "center" }}>you have seen it all</p>
              }
              loader={
                <div className={styles.loadingContainer}>
                  <span className={styles.loader}></span>
                </div>
              }
            >
              <div className={styles.grid}>
                {list.map((el, i) => (
                  <Card key={i} blog={el} introRef={cardIntroRef} />
                ))}
              </div>
            </InfiniteScroll>
          )}
        </Container>
      </div>
      <Footer />
    </main>
  );
}
