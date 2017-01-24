module Queries
  PossibleGameType = GraphQL::ObjectType.define do
    name "PossibleGame"
    description "A possible outcome of a game"

    field :slot, !types.Int

    field :previous_slot_one, types.Int, property: :left_position
    field :previous_slot_two, types.Int, property: :right_position

    field :next_game_slot, types.Int
    field :next_game_position, types.Int, property: :next_slot # 1 or 2

    field :round_number, !types.Int
    field :region, types.String

    field :first_team, TeamType
    field :second_team, TeamType
    field :winning_team, TeamType, property: :team
    field :losing_team, TeamType, property: :loser
  end
end
