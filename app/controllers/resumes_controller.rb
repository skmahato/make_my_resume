class ResumesController < ApplicationController
  def index
    render json: resumes, status: :ok
  end

  def create
    @resume = Resume.new(resume_params)

    if @resume.save
      render json: @resume, status: :ok
    else
      render json: { errors: @resume.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def update
    resume = resumes.find(params[:id])
    if resume.update_attributes(resume_params)
      render json: resume, status: :ok
    else
      render json: { errors: resume.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def destroy
    resume = resumes.find(params[:id])

    if resume.destroy
      render json: resume, status: :ok
    else
      render json: { errors: resume.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private

  def resume_params
    params.require(:resume).permit(:title)
  end

  def resumes
    @resumes ||= @current_user.resumes
  end
end
