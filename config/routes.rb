Docshare::Application.routes.draw do
  devise_for :users
  resources :documents, :only => [:index, :show, :update, :create]
  resources :users, :only => [:index]
  resources :document_shares, :only => [:create]

  root :to => "documents#index"
end
