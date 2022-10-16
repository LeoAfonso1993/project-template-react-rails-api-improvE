class ScoresController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        score = Score.all
        render json: score
    end

    def create
        score = Score.create(score_params)
        render json: score, status: :created
    end

    def show
        score = Score.find(params[:id])
        render json: score
    end

    private
    
    def score_params
        params.permit(:number_of_questions, :points, :completed, :training_id, :user_name, :user_id)
    end

    def render_not_found_response
        render json: {error: "Score not found"}, status: :not_found
    end
end
