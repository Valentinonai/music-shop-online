export const GET_ALBUM = "GET_ALBUM";

export const getAlbumAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/75621062"
      );
      if (resp.ok) {
        let parseBody = await resp.json();
        dispatch({ type: GET_ALBUM, payload: parseBody });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
