class QuizzesController < ApplicationController
    skip_before_action :authorize

    def create
        quiz = Quiz.create(params)
        render json: quiz, status: :created
    end

    private

    def quiz_params
        params.permit(:question, :correct_answer, :option_2, :option_3, :option_4)
    end
end

