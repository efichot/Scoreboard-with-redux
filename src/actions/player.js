import * as PlayerActionTypes from '../actionTypes/player.js';

export const addPlayer = name => {
    return {
        types: PlayerActionTypes.ADD_PLAYER,
        name
    }
}

export const Remove_player = index => {
    return {
        types: PlayerActionTypes.REMOVE_PLAYER,
        index
    }
}

export const Update_player_score = (index, signe) => {
    return {
        types: PlayerActionTypes.UPDATE_PLAYER_SCORE,
        signe,
        index,
    }
}