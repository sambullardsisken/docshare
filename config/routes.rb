Docshare::Application.routes.draw do
  root :to => "documents#index"
  devise_for :users
  resources :documents, :only => [:index, :show, :update, :create] do
    collection do
      get 'shared'
    end
  end
  resources :users, :only => [:index]
  resources :document_shares, :only => [:create]


end
