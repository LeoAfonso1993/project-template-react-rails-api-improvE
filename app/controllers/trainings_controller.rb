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

