class ScoresController < ApplicationController
  before_action :score_params, :set_score, only: :show, :destroy, :update
  def index
    scores = Score.all
    render json: scores
  end

  def show
    render json: set_scores
  end

  def create
    score = Score.create(score_params)
    render json: Score.all
  end

  def update
    score = set_score
    score = score.update(score_params)
    render json: score
  end

  def destroy
    @score = set_score
    @score.delete()
    render json: Score.all
  end

  private

  def set_score
    @score = Score.find(score_params)
  end

  def score_params
   params.require(:score).permit(:userId, :value)
  end
end
