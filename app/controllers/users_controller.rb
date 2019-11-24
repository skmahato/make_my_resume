class UsersController < ApplicationController
  def create
    if User.find_by_email(user_params[:email])
      render json: { errors: ['User already exsts, Login to continue'] },
             status: :unprocessable_entity
    else
      @user = User.new(user_params)

      if @user.save
        token = JsonWebToken.encode(user_id: @user.id)
        time = Time.now + 24.hours.to_i
        render json: { token: token, exp: time.strftime('%m-%d-%Y %H:%M'), email: @user.email },
               status: :ok
      else
        render json: { errors: @user.errors.full_messages },
               status: :unprocessable_entity
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
