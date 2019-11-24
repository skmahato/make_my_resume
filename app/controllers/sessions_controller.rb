class SessionsController < ApplicationController
  skip_before_action :authorize_request, only: :create

  def authorize
    if @current_user
      render json: @current_user, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def create
    @user = User.find_by_email(params[:email])
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime('%m-%d-%Y %H:%M'), email: @user.email }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end
