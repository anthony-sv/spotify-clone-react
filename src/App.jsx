import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';
import Home from './Home';
import { useEffect, useState } from 'react';
import "./styles.css"
import Reproductor from './Reproductor';

const initialStateF = JSON.parse(localStorage.getItem('favoritos') || '[]');
const initialStateS = JSON.parse(localStorage.getItem('busqueda') || '[]');
const initialStateC = JSON.parse(localStorage.getItem('currS') || '[]');

const App = () => {
	const [ favoriteSongs, setFavoriteSongs ] = useState(initialStateF);
    const [songs, setSongs] = useState(initialStateS);
    const [currentSong, setCurrentSong] = useState(initialStateC);
	useEffect(
		() => {
			localStorage.setItem('favoritos', JSON.stringify(favoriteSongs));
		},
		[ favoriteSongs ]
	);
    useEffect(() => {
        localStorage.setItem("busqueda", JSON.stringify(songs));
    }, [songs]);
    useEffect(() => {
        localStorage.setItem("currS", JSON.stringify(currentSong));
    }, [currentSong]);
	return (
        <>
            <Router>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/favorites">Favorites</Link>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <h1 style={{ marginLeft: "1rem" }}>
                            Spotify clone App
                        </h1>
                    </Route>
                    <Route exact path="/favorites">
                        <Home
                            favoriteSongs={favoriteSongs}
                            setFavoriteSongs={setFavoriteSongs}
                            songs={songs}
                            setSongs={setSongs}
                            currentSong={currentSong}
                            setCurrentSong={setCurrentSong}
                        />
                    </Route>
                    <Route exact path="/search">
                        <Search
                            favoriteSongs={favoriteSongs}
                            setFavoriteSongs={setFavoriteSongs}
                            songs={songs}
                            setSongs={setSongs}
                            currentSong={currentSong}
                            setCurrentSong={setCurrentSong}
                        />
                    </Route>
                </Switch>
            </Router>
            {currentSong && (
                <Reproductor
                    source={currentSong.previewURL}
                    name={currentSong.name}
                    album={currentSong.albumName}
                />
            )}
        </>
    );
};

export default App;
