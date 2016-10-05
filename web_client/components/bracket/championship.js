import React, { Component } from 'react'
import TournamentTree from 'objects/tournament_tree'

export default class Championship extends Component {
  tournamentTree = () => {
    const { num_rounds, game_decisions, game_mask } = this.props.tournament
    return new TournamentTree(num_rounds, game_decisions, game_mask)
  }

  // bracketTree = () => {
  //   if (this.props.bracket) {
  //     const {num_rounds, game_decisions, game_mask} = this.props.bracket
  //     return new TournamentTree(num_rounds, game_decisions, game_mask)
  //   }
  //   else {
  //     return null
  //   }
  // }
  //
  // championshipGame = () => {
  //   const { num_rounds, game_decisions, game_mask } = this.props.tournament
  //   const tournamentTree = new TournamentTree(num_rounds, game_decisions, game_mask)
  //   return tournamentTree.gameNodes[1]
  // }
  //
  teamByStartingSlot = (slot) => {
    return this.props.tournament.teams.find(t => t.starting_slot == slot)
  }

  // championshipPick = () => {
  //   const bracket = this.props.bracket
  //   if (bracket && bracket.picks) {
  //     return bracket.picks.find(pick => pick.slot == 1)
  //   }
  // }


  championName = () => {
    // const { game, pick } = this.props
    //
    // const obj = pick || game
    const obj = this.tournamentTree().gameNodes[1]
    if (obj.winningTeamStartingSlot()) {
      return this.teamByStartingSlot(obj.winningTeamStartingSlot()).name
    }
  }

  pickLabel = () => {
  //   return null;
  //   const { game, pick } = this.props
  //   if (game && pick) {
  //     if(game.winning_team && pick.winning_team) {
  //       if(game.winning_team.name == pick.winning_team.name) {
  //         return 'correct-pick'
  //       }
  //       else {
  //         return 'eliminated'
  //       }
  //     }
  //   }
  }

  render() {
    return <div className="championship">
      <div className={`champion-box ${this.pickLabel()}`.trim()}>{this.championName()}</div>
      <div className="champion-label">CHAMPION</div>
    </div>
  }
}