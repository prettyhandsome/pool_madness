class Pick < ActiveRecord::Base
  belongs_to :bracket
  belongs_to :team
  belongs_to :game

  attr_accessible :game_id, :team_id

  def first_team
    if self.game.game_one.present?
      self.bracket.picks.where(:game_id => self.game.game_one_id).first.try(:team)
    else
      self.game.team_one
    end
  end

  def second_team
    if self.game.game_two.present?
      self.bracket.picks.where(:game_id => self.game.game_two_id).first.try(:team)
    else
      self.game.team_two
    end
  end
end