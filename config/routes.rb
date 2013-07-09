Docshare::Application.routes.draw do
  devise_for :users
  resources :documents, :only => [:index, :show, :update, :create]
  root :to => "documents#index"
end
