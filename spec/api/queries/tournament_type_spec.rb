require "rails_helper"

RSpec.describe Queries::TournamentType do
  subject { Queries::TournamentType }

  context "fields" do
    let(:fields) { %w(id name games_remaining archived tip_off rounds teams game_mask game_decisions) }

    it "has the proper fields" do
      expect(subject.fields.keys).to match_array(fields)
    end

    describe "tip_off" do
      subject { Queries::TournamentType.fields["tip_off"] }

      let(:tip_off) { 2.days.ago.change(usec: 0) }
      let(:tournament) { create(:tournament, tip_off: tip_off) }

      it "is the string representation of the tip_off Time (iso8601)" do
        result = subject.resolve(tournament, nil, nil)
        expect(result).to eq(tip_off.iso8601)
        expect(Time.iso8601(result)).to eq(tip_off)
      end
    end
  end
end
