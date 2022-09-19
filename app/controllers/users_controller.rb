class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create], raise: false

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :created
    end

    private
    
    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :is_admin)
    end
    
end

