Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :scores
      resources :assets
      resources :users, only: [:index, :show, :create]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
