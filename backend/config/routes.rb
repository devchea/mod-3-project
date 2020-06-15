Rails.application.routes.draw do
  resources :challengers
  resources :users
  resources :matches
  resources :user_names
  resources :fighters
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
