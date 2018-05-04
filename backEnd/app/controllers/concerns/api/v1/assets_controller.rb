module Api
  module V1
    class AssetsController < ApplicationController
      before_action :asset_params, :set_asset, only: [:show, :destroy, :update]
      def index
        assets = Asset.all
        render json: assets
      end

      def show
        render json: set_asset
      end

      def create
        asset = Asset.create(asset_params)
        render json: Asset.all
      end

      def update
        asset = set_asset
        asset = asset.update(asset_params)
        render json: asset
      end

      def destroy
        @asset = set_asset
        @asset.delete()
        render json: Asset.all
      end

      private

      def set_asset
        @asset = Asset.find(asset_params)
      end

      def asset_params
        params.require(:asset).permit(:userId, :yeezy, :grammy, :persianRug)
      end
    end
  end
end
