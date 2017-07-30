import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';

class Scoreboard extends Component {
  
  static propTypes = {
    players: PropTypes.array.isRequired
  }



  render() {

    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {players.map(function(player, index) {
             return (
               <Player
                 index= {index}
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 updatePlayerScore={updatePlayerScore}
                 removePlayer={removePlayer}
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm addPLayer={addPLayer} />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard);