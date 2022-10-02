class VideosController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        video = Video.all
        render json: video
    end

    def show
        video = Video.find(params[:id])
        render json: video
    end

    def create
        video = Video.create(video_params)
        render json: video, status: :created
    end

    def update
        video = Video.find(params[:id])
        video.update(training_params)
        render json: video
    end

    def user_videos
        videos = Video.where(params[:training_id]).order("created_on DESC")
        render json: videos
    end

    def destroy
        video = Vext.find(params[:id])
        video.destroy
        head :no_content
    end


    private

    def video_params
        params.permit(:title, :description, :url, :training_id)
    end

    def render_not_found_response
        render json: {error: "Video not found"}, status: :not_found
    end
end
