/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Image } from './styles';

function AlbumCard({
  album: {
    artworkUrl100, artistName, collectionName, collectionId,
  },
}) {
  return (
    <Container>
      <Link
        to={`/album/${collectionId}`}
      >
        <Image artworkUrl100={artworkUrl100.replace('100x100bb.jpg', '400x400.jpg')} />
        <div>
          <p className="collectionName">{collectionName}</p>
        </div>
        <p className="artistName">{artistName}</p>
      </Link>
    </Container>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
  }).isRequired,
};

export default AlbumCard;
