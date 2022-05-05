const baseUrl = "http://localhost:5000";

const meEndpoint = `${baseUrl}/api/users/me`;
const loginEndpoint = `${baseUrl}/api/auth/login`;
const registerEndpoint = `${baseUrl}/api/auth/register`;
const searchArtistsEndpoint = `${baseUrl}/api/search/artists/`;
const searchTracksEndpoint = `${baseUrl}/api/search/tracks/`;
const searchPlaylistsEndpoint = `${baseUrl}/api/search/playlists/`;
const searchAlbumsEndpoint = `${baseUrl}/api/search/albums/`;
const searchAllEndpoint = `${baseUrl}/api/search/all/`;
const favoritesPlaylistEndpoint = `${baseUrl}/api/playlists/favorites`;

export {
  meEndpoint,
  loginEndpoint,
  registerEndpoint,
  searchArtistsEndpoint,
  searchTracksEndpoint,
  searchPlaylistsEndpoint,
  searchAlbumsEndpoint,
  searchAllEndpoint,
  favoritesPlaylistEndpoint,
};
