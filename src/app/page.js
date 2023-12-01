"use client";
import { useRef } from "react";
import introJs from "intro.js-react";
import { Container } from "./components/container/container";
import { Header } from "./components/Header/header";
import styles from "./page.module.css";
import { Card } from "./components/card/card";
import { Footer } from "./components/footer/footer";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SkeletonCard } from "./components/skeleton/skeleton";
// import Joyride from "react-joyride";
import 'intro.js/introjs.css';

export default function Home() {
  const homeIntroRef = useRef(); 
  const cardIntroRef = useRef();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

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
    const IntoJs = () => {
      const steps = [
        {
          intro: "Welcome This is my simple blog!"
        },
        {
          element: ".h1",
          intro: "This is title",
        },
        {
          element: ".card-div",
          intro: "The blog posts here..!",
        }
      ];
      homeIntroRef.current = IntroJs().setOptions({
        steps,
        showBullets: false,
      });
     
      setTimeout(() => {
        homeIntroRef.current.start();
      }, 2000);
    };
    IntoJs();
  }, []);

  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.title}>
              <h1>Simple Blog.</h1>
              <p>A blog created by Aon 2023</p>
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
                  <Card key={i} blog={el} introRef={cardIntroRef}/>
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
