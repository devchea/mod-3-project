class ChallengersController < ApplicationController


    def index 
        challengers = Challenger.all 
        render json: challengers 
    end
end

 
