class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

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

    # def admin #working on this one now
    #     user = User.find_by(id: session[:user_id])
    #     if user.is_admin?
    #         a = 
    # end

    private
    
    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :is_admin)
    end
    
end

