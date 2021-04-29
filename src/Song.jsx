import styles from './Search.module.css';

const Song = ({
    song,
    currentSong,
    setCurrentSong,
    favoriteSongs,
    setFavoriteSongs
}) => {
    const addToFavoriteSongs = () => {
        console.log(song.id);
        const exist = favoriteSongs.includes(song);

        if (!exist) {
            setFavoriteSongs([...favoriteSongs, song]);
        }
    };

    return (
        <div className={styles.song}>
            <h2>{song.artistName}</h2>
            <h3>
                {song.name} - {song.albumName}
            </h3>
            <div className={styles.songButtonContainer}>
                <button
                    className="myButton"
                    style={{ marginLeft: "0.5rem" }}
                    onClick={() => setCurrentSong(song)}
                >
                    Play
                </button>
                <button
                    className="myButton"
                    style={{ marginLeft: "0.5rem" }}
                    onClick={addToFavoriteSongs}
                >
                    Favourite
                </button>
            </div>
        </div>
    );
};

export default Song;
