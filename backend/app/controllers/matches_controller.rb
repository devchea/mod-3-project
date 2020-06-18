class MatchesController < ApplicationController



    def show
      match = Match.find_by(id: params[:id])
      render json: match
    end
  

    def index
        matches = Match.all
        render json: matches
    end

    def create
      new_match = Match.create!(match_params)
      render json: new_match
    end

    def update
      match = Match.find(params[:id])
      render json: match
      match.update(match_params)
    end

    private
      def match_params
        params.require(:match).permit(:fighter_id, :challenger_id, :comment, :venue)
      end
end
