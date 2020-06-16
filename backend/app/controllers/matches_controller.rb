class MatchesController < ApplicationController

    def index
        matches = Match.all
        render json: matches
    end

    def create
      new_match = Match.create!(match_params)
      render json: new_match

    end

    private
      def match_params
        params.require(:match).permit(:fighter_id, :challenger_id, :venue)
      end
end
