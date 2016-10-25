import React, { Component } from 'react'
import TournamentTree from 'objects/tournament_tree'

export default class Championship extends Component {
  tournamentTree = () => {
    const { num_rounds, game_decisions, game_mask } = this.props.tournament
    return new TournamentTree(num_rounds, game_decisions, game_mask)
  }

  bracketTree = () => {
    if (this.props.bracket) {
      const { num_rounds } = this.props.tournament
      const { game_decisions, game_mask } = this.props.bracket
      return new TournamentTree(num_rounds, game_decisions, game_mask)
    }
    else {
      return null
    }
  }

  teamByStartingSlot = (slot) => {
    return this.props.tournament.teams.find(t => t.starting_slot == slot)
  }

  championName = () => {
    const tournamentNode = this.tournamentTree().gameNodes[1]
    const pickNode = this.bracketTree() ? this.bracketTree().gameNodes[1] : null
    const startingSlot = pickNode ? pickNode.winningTeamStartingSlot() : tournamentNode.winningTeamStartingSlot()
    if (startingSlot) {
      return this.teamByStartingSlot(startingSlot).name
    }
  }

  pickLabel = () => {
    let pickClass = ''
    const game = this.tournamentTree().gameNodes[1]
    const bracketTree = this.bracketTree()
    const pick = bracketTree ? bracketTree.gameNodes[1] : null

    if (game && pick) {
      const team = this.teamByStartingSlot(pick.firstTeamStartingSlot())
      const game_team = this.teamByStartingSlot(game.firstTeamStartingSlot())
      if (team && (!team.still_playing || game_team)) {
        if (game_team && team.name == game_team.name) {
          pickClass = 'correct-pick'
        }
        else {
          pickClass = 'eliminated'
        }
      }

      return pickClass
    }
  }

  render() {
    return <div className="championship">
      <div className={`champion-box ${this.pickLabel()}`.trim()}>{this.championName()}</div>
      <div className="champion-label">CHAMPION</div>
    </div>
  }
}