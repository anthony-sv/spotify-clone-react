import { useEffect, useRef} from 'react';
import styles from './Search.module.css';
import Song from './Song';

const Search = ({
    favoriteSongs,
    setFavoriteSongs,
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
}) => {
    const queryRef = useRef(null);

    const search = async () => {
        setSongs([]);
        const queryString = queryRef.current.value;
        let baseURL = "https://api.napster.com";
        let key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
        let query = `query=${queryString}`;
        let url = baseURL + `/v2.2/search/verbose?${key}&${query}`;

        let response = await fetch(url);
        let json = await response.json();
        setSongs(json.search.data.tracks);
    };

    useEffect(() => {
        console.log(songs);
    }, [songs]);

    return (
        <>
            <div className={styles.app}>
                <h3>Search for some songs!</h3>
                <input className="input" ref={queryRef} />
                <br />
                <button
                    className="myButton"
                    style={{ marginTop: "1rem" }}
                    onClick={search}
                >
                    Search
                </button>
            </div>
            <section className={styles.songsContainer}>
                {songs.map((song, index) => (
                    <Song
                        key={index}
                        song={song}
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                        favoriteSongs={favoriteSongs}
                        setFavoriteSongs={setFavoriteSongs}
                    />
                ))}
            </section>
        </>
    );
};

export default Search;
