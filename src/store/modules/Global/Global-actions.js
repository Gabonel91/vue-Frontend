export default {
    // ensure data for rendering given list type

    GLOBAL_SCREEN: ({ commit, dispatch, state }, { screenHeight, screenWidth }) => {

        return commit( "SET_GLOBAL_SCREEN", {screenHeight, screenWidth} );

    },


}