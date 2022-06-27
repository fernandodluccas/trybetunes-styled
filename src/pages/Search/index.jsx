/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Loading from '../../components/Loading';

import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Header from '../../components/Header';
import {
  AlbumList,
  Button,
  Form,
  Input,
  AlbumsWrapper,
} from './styles';
import AlbumCard from '../../components/AlbumCard';

export default class Search extends React.Component {
  state = {
    loading: false,
    artistFormName: '',
    artistName: '',
    artistAlbum: [],
    hasAlbum: true,
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const { artistFormName } = this.state;

    this.setState(
      {
        loading: true,
        artistFormName: '',
        artistName: artistFormName,
      },
      async () => {
        const album = await searchAlbumsAPI(artistFormName);
        const foundAlbum = album.length > 0;

        this.setState({
          loading: false,
          artistAlbum: album,
          hasAlbum: foundAlbum,
        });
      },
    );
  };

  buttonDisabled = () => {
    const MIN_LENGTH_NAME = 2;
    const { artistFormName } = this.state;

    return artistFormName.length >= MIN_LENGTH_NAME;
  };

  render() {
    const {
      artistFormName, loading, artistAlbum, artistName, hasAlbum,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <Form>
          <label htmlFor="search-artist-input">
            <Input
              id="search-artist-input"
              type="text"
              name="artistFormName"
              value={artistFormName}
              placeholder="Nome do Artista"
              data-testid="search-artist-input"
              onChange={this.handleChangeForm}
            />
          </label>
          <Button
            type="submit"
            data-testid="search-artist-Button"
            disabled={!this.buttonDisabled()}
            onClick={this.onButtonClick}
          >
            Pesquisar
          </Button>
        </Form>

        {loading ? (
          <Loading />
        ) : (
          <AlbumList>
            {artistAlbum.length > 0 && (
              <>
                <h2>
                  Resultado de álbuns de:
                  {' '}
                  {artistName}
                </h2>
                <AlbumsWrapper>
                  {artistAlbum.map((album) => (
                    <AlbumCard album={album} key={album.collectionId} />
                  ))}
                </AlbumsWrapper>
              </>
            )}
            <div>{hasAlbum ? null : <p>Nenhum álbum foi encontrado</p>}</div>
          </AlbumList>
        )}
      </div>
    );
  }
}
