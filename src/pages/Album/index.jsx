import React from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';
import MusicCard from '../../components/MusicCard';
import getMusics from '../../services/musicsAPI';
import Header from '../../components/Header';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../../services/favoriteSongsAPI';
import { Container, Playlist } from './styles';

export default class Album extends React.Component {
  state = {
    musicList: [],
    favoriteSongs: [],
    album: {},
    loading: true,
    loadingFavorites: true,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const request = await getMusics(id);
    // const favorites = await getFavoriteSongs();
    const album = request[0];
    const musicList = request.filter((item) => item.kind === 'song');

    getFavoriteSongs().then((favoriteSongs) => this.setState({
      favoriteSongs,
      loadingFavorites: false,
    }));

    this.setMusics(musicList, album);
  }

  setFavoriteSongs = (favoriteSongs) => {
    this.setState({
      favoriteSongs,
      loadingFavorites: false,
    });
  };

  setMusics = (musicList, album) => {
    this.setState({
      musicList,
      album,
      loading: false,
    });
  };

  AddFavoriteSong = async (trackId) => {
    const { musicList } = this.state;

    const song = musicList.find((music) => music.trackId === parseInt(trackId, 10));

    const checked = musicList.includes((music) => music.trackId === parseInt(trackId, 10));

    const updateFunction = checked ? removeSong : addSong;

    this.setState({
      loadingFavorites: true,
    });
    updateFunction(song)
      .then(() => getFavoriteSongs())
      .then((favoriteSongs) => this.setFavoriteSongs(favoriteSongs));
  };

  render() {
    const {
      loading, musicList, album, favoriteSongs, loadingFavorites,
    } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <Container>
          { loading || loadingFavorites
            ? <ClipLoader color="#e33b6d" />
            : (
              <>
                <div className="title-content">
                  {album && (
                    <h3>
                      <img src={album.artworkUrl100.replace('100x100bb', '400x400')} alt="" className="albumArtwork" />
                      <p data-testid="artist-name" className="artistName">
                        {album.artistName}
                      </p>
                      <p data-testid="album-name" className="collectionName">
                        {album.collectionName}
                      </p>
                    </h3>
                  )}
                </div>
                <Playlist>
                  {musicList.map((music) => (
                    <MusicCard
                      key={music.trackId}
                      music={music}
                      AddFavoriteSong={this.AddFavoriteSong}
                      favorites={favoriteSongs}
                      columns="100px 1fr 200px"
                    />
                  ))}
                </Playlist>
              </>
            )}
        </Container>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
