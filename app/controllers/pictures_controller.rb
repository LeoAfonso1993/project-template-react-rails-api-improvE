class PicturesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: :create

      def create
        picture = Picture.create(picture_params)
        render json: picture, status: :created
      end

      def show
        picture = Picture.find(params[:id])
        render json: picture
      end

      def destroy
        picture = Picture.find(params[:id])
        picture.destroy
        head :no_content
    end
    
      private
    
      def picture_params
        params.permit(:title, :description, :training_id, :url)
      end

      def render_not_found_response
        render json: {error: "Picture not found"}, status: :not_found
    end
end
