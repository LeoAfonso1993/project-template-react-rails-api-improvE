class QuizzesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize

    def create
        quiz = Quiz.create(params)
        render json: quiz, status: :created
    end

    def show
        quiz = Quiz.find(params[:id])
        render json: quiz
    end

    def destroy
        quiz = Quiz.find(params[:id])
        quiz.destroy
        render json: quiz
    end

    private

    def quiz_params
        params.permit(:question, :correct_answer, :option_2, :option_3, :option_4)
    end

    def render_not_found_response
        render json: {error: "Quiz not found"}, status: :not_found
    end
end

