//Action Creator
export const selectSont = song => {
  //return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
