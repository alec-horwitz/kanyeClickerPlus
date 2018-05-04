module Api
  module V1
    class AssetsController < ApplicationController
      before_action :asset_params, only: [:show, :update]
      before_action :set_asset, only: [:show, :destroy, :update]
      def index
        assets = Asset.all
        render json: assets
      end

      def show
        render json: @asset
      end

      def create
        # byebug
        asset = Asset.create(asset_params)
        render json: Asset.all
      end

      def update
        @asset.update(asset_params)
        render json: @asset
      end

      def destroy
        @asset.delete()
        render json: Asset.all
      end

      private

      def set_asset
        @asset = Asset.find(params[:id])
      end

      def asset_params
        params.require(:asset).permit(:user_id, :yeezy, :grammy, :persianRug)
      end
    end
  end
end
