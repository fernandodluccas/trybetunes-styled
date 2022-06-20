import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import heartIcon from '../../assets/heart.svg';
import heartFilledIcon from '../../assets/heartFilled.svg';

export default class MusicCard extends React.Component {
  render() {
    const {
      music, AddFavoriteSong, favorites, columns,
    } = this.props;
    return (
      <Container columns={columns}>
        <img src={music.artworkUrl100} className="artwork" alt="" />
        <label
          htmlFor={`favorite-${music.trackId}`}
          data-testid={`checkbox-music-${music.trackId}`}
        >
          <button type="button" onClick={() => AddFavoriteSong(music.trackId)} value={music.trackId}>
            {favorites.some((s) => s.trackId === music.trackId) ? (
              <img src={heartFilledIcon} alt="" />
            ) : (
              <img src={heartIcon} alt="" />
            )}
          </button>
        </label>
        <p>
          {music.trackName}
        </p>
        <audio
          data-testid="audio-component"
          src={music.previewUrl}
          controls
          controlsList="nodownload noplaybackrate"
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>

      </Container>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
  }).isRequired,
  AddFavoriteSong: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      trackName: PropTypes.string.isRequired,
      previewUrl: PropTypes.string.isRequired,
      trackId: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  columns: PropTypes.string.isRequired,
};
