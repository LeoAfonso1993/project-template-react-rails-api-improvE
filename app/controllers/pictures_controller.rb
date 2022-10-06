class PicturesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: :create

    def create
        picture = Picture.create(params.permit(:title, :description, :training_id, :image))
        render json: picture, status: :created
      end
    
      private
    
      def picture_params
        params.permit(:title, :description, :training_id, :image)
      end

      def render_not_found_response
        render json: {error: "Picture not found"}, status: :not_found
    end
end
