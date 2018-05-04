module Api
  module V1
    class ScoresController < ApplicationController
      before_action :score_params, only: [:show, :update]
      before_action :set_score, only: [:show, :destroy, :update]
      def index
        scores = Score.all
        render json: scores
      end

      def show
        render json: @score
      end

      def create
        score = Score.create(score_params)
        render json: Score.all
      end

      def update
        @score.update(score_params)
        render json: @score
      end

      def destroy
        @score.delete()
        render json: Score.all
      end

      private

      def set_score
        @score = Score.find(params[:id])
      end

      def score_params
        params.require(:score).permit(:user_id, :value)
      end
    end
  end
end
