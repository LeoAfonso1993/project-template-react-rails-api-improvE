class CategoriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize

    def index
        category = Category.all
        render json: category
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def destroy
        category = Category.find(params[:id])
        category.destroy
        head :no_content
    end

    private

    def category_params
        params.permit(:name)
    end

    def render_not_found_response
        render json: {error: "Category not found"}, status: :not_found
    end
end
