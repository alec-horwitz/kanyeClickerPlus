module Api
  module V1
    class UsersController < ApplicationController
      before_action :user_params, :set_user, only: :show
      def index
        users = User.all
        render json: users
      end

      def show
        render json: set_user
      end

      def create
        user = User.create(user_params)
        render json: User.all
      end

      private

      def set_user
        @user = User.find(params[:id])
      end

      def user_params
        params.require(:user).permit(:name, :has_secure_password)
      end
    end
  end
end
