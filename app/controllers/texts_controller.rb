class TextsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        text = Text.all
        render json: text
    end

    def show
        text = Text.find(params[:id])
        render json: text
    end

    def create
        text = Text.create(text_params)
        render json: text, status: :created
    end

    def update
        text = Text.find(params[:id])
        text.update(training_params)
        render json: text
    end

    def user_texts
        texts = Text.where(params[:training_id]).order("created_on DESC")
        render json: texts
    end

    def destroy
        text = Text.find(params[:id])
        text.destroy
        head :no_content
    end


    private

    def text_params
        params.permit(:title, :description, :training_id)
    end

    def render_not_found_response
        render json: {error: "Text not found"}, status: :not_found
    end
end
