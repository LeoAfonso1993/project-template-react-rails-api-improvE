class UserTrainingsController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        assignment = UserTraining.all
        render json: assignment
    end

    def create
        assignment = UserTraining.create(params.permit(:user_id, :training_id))
        render json: assignment, status: :created
    end

    def show
        assignment = UserTraining.find(params[:id])
        render json: assignment
    end

    def destroy
        assignment = UserTraining.find(params[:id])
        assignment.destroy
        head :no_content
    end
    
    private
    
    def user_training__params
        params.permit(:user_id, :training_id)
    end

    def render_not_found_response
        render json: {error: "Training not found"}, status: :not_found
    end
end
