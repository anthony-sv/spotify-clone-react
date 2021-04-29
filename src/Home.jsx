import Song from './Song';
import styles from './Search.module.css'

const Home = ({
    favoriteSongs,
    setFavoriteSongs,
    songs,
    setSongs,
    currentSong,
    setCurrentSong
}) => {
    return (
        <main style={{ marginLeft: "1rem" }}>
            <h1>Favorite Songs</h1>
            <section
                className={styles.songsContainer}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1rem",
                }}
            >
                {favoriteSongs.length > 0 ? (
                    favoriteSongs.map((song, index) => <Song
                        key={index}
                        song={song}
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                        favoriteSongs={favoriteSongs}
                        setFavoriteSongs={setFavoriteSongs}
                    />)
                ) : (
                    <h4>Empty favorite song list</h4>
                )}
            </section>
        </main>
    );
};

export default Home;
