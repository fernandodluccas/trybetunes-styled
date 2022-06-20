import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import MusicCard from '../../components/MusicCard';
import Header from '../../components/Header';
import {
  getFavoriteSongs,
  addSong,
  removeSong,
} from '../../services/favoriteSongsAPI';
import { Container } from './styles';

export default class Favorites extends React.Component {
  state = {
    loading: true,
    favoriteSongs: [],
  };

  componentDidMount() {
    getFavoriteSongs().then((favoriteSongs) => {
      this.setState({
        loading: false,
        favoriteSongs,
      });
    });
  }

  onFavoriteChange = (trackId) => {
    const { favoriteSongs } = this.state;
    const song = favoriteSongs.find((m) => m.trackId === parseInt(trackId, 10));

    const checked = favoriteSongs.some((m) => m.trackId === parseInt(trackId, 10));

    const updateFunction = checked ? removeSong : addSong;

    this.setState({
      loading: true,
    });

    updateFunction(song)
      .then(() => getFavoriteSongs())
      .then((favSongs) => this.setState({ favoriteSongs: favSongs, loading: false }));
  };

  render() {
    const { favoriteSongs, loading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />

        <Container>

          <h2>Musicas Favoritas</h2>
          {loading
            ? <ClipLoader color="#e33b6d" />
            : (
              favoriteSongs.map((song) => (
                <MusicCard
                  key={song.trackId}
                  music={song}
                  AddFavoriteSong={this.onFavoriteChange}
                  favorites={favoriteSongs}
                  columns="100px 100px 1fr 200px"
                />
              ))
            )}
        </Container>

      </div>
    );
  }
}
