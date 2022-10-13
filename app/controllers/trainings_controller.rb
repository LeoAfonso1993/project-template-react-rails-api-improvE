class TrainingsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        training = Training.all
        render json: training
    end

    def show
        training = Training.find(params[:id])
        render json: training
    end

    def show_items_quiz
        training = Training.find(params[:id])
        quiz = training.quizzes
        render json: quiz
    end

    def show_items_text
        training = Training.find(params[:id])
        text = training.texts
        render json: text
    end

    def show_items_video
        training = Training.find(params[:id])
        video = training.videos
        render json: video
    end

    def show_items_picture
        training = Training.find(params[:id])
        picture = training.pictures
        render json: picture
    end

    def show_users
        training = Training.find(params[:id])
        user = training.users
        render json: user
    end

    def create
        training = Training.create(training_params)
        render json: training, status: :created
    end

    def update
        training = Training.find(params[:id])
        training.update(training_params)
        render json: training
    end

    def destroy
        training = Training.find(params[:id])
        training.destroy
        head :no_content
    end

    private

    def training_params
        params.permit(:name, :category_id)
    end

    def render_not_found_response
        render json: {error: "Training not found"}, status: :not_found
    end
    
end

