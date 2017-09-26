Rails.application.routes.draw do
  get 'rest/method'

root to: 'site#index2'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


Rails.application.routes.draw do
  get 'rest/method' , to: 'rest#method'
root to: 'rest#method'
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end
end
