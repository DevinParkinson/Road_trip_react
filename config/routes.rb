Rails.application.routes.draw do
  namespace :api do
    resources :trips
  end


  get '*other', to: 'static#index'
end
