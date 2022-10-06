Rails.application.routes.draw do
  get 's3/direct_post'
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

  post "/newtext", to: "texts#create"
  get "/showtext", to:"texts#show"

  post "/newvideo", to: "videos#create"
  get "/showvideo", to: "videos#show"

  post "/newpicture", to: "pictures#create"

  post "/s3/direct_post", to: "s3_controller#direct_post"

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
