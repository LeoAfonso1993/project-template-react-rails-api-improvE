class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        user = User.all
        render json: user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        #user = User.find_by(id: session[:user_id])
        #admin = user.is_admin
        #render json: {user: user, admin: admin}, status: :created
        render json: @current_user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    private
    
    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :is_admin, :company_id)
    end

    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end
    
end

