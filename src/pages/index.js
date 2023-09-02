import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
// import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ['latin'] })
import Button from "@/components/button";
export default function Home() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    getData();
  }, [search]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTg1OGEzNWU2YjI2MThmNTgwNTY5MmE1ZWJlMzQ2YiIsInN1YiI6IjY0NjgwNmE5YTUwNDZlMDEyNDY3NWE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EVFXdXUkFht83bm3l5V4wTDtYt_YLH9ArL66SBizgxI",
          },
        }
      );
      const data = await response.json();
      setMovies(data.results);
      console.log("lakukan searching kembali");
      // console.log(movies);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.wrapperheader}>
          <h1>Cari Film</h1>
          <input
            type="text"
            className={styles.input}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Cari Film"
          />
        </div>
        <div className={styles.wrappercard}>
          {movies.map((movie) => (
            <>
              {movie.poster_path && (
                <div className={styles.card}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={200}
                    height={200}
                    style={{ borderRadius: 8 }}
                  />
                  <div className={styles.cardTitle}>
                    <p>{movie.title}</p>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      {/* <Button type="filled" onClick={increaseCount}>
        Tambah
      </Button>
      <h1>{count}</h1>
      <Button type="filled" onClick={decreaseCount}>
        Kurang
      </Button> */}
    </>
  );
}
