require "spec_helper"
require "cancan/matchers"

describe Ability, type: :model do
  before { build(:tournament) }

  context "not logged in" do
    let(:user) { User.new }
    subject { Ability.new(user) }

    it { should_not be_able_to(:read, User) }
    it { should_not be_able_to(:read, Bracket) }
    it { should_not be_able_to(:read, Pick) }
    it { should_not be_able_to(:read, Game) }
  end

  context "logged in" do
    let(:user) { create(:user) }
    let(:bracket) { create(:bracket, user: user) }

    subject { Ability.new(user) }

    it { should be_able_to(:manage, user) }
    it { should be_able_to(:read, Game.first) }

    context "pool has started" do
      it { should be_able_to(:read, bracket) }
      it { should_not be_able_to(:manage, bracket) }
      it { should_not be_able_to(:create, Bracket) }
      it { should_not be_able_to(:destroy, bracket) }
      it { should_not be_able_to(:update, bracket) }
    end

    context "pool has not started" do
      subject { Ability.new(user, Pool.new(tip_off_attr: DateTime.tomorrow)) }

      it { should be_able_to(:manage, bracket) }
      it { should be_able_to(:update, bracket.picks.sample) }
    end
  end
end