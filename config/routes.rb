Rails.application.routes.draw do
  resources :trainings
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/alltrainings", to: "trainings#index"
  get "/allcategories", to: "categories#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/newquiz", to: "quizzes#create"
  get "/showquiz", to: "quizzes#show"
  delete "/showdelete", to: "quizzes#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
