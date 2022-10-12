Rails.application.routes.draw do
  get 's3/direct_post'
  resources :trainings

  get "/allusers", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/deleteuser/:id", to: "users#destroy"
  patch "/upedateuserpermission/:id", to:"users#update"
  
  get "/alltrainings", to: "trainings#index"
  get "/allcategories", to: "categories#index"
  get "/show_items_quiz/:id", to: "trainings#show_items_quiz"
  get "/show_items_text/:id", to: "trainings#show_items_text"
  get "/show_items_video/:id", to: "trainings#show_items_video"
  get "/show_items_picture/:id", to: "trainings#show_items_picture"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/newquiz", to: "quizzes#create"
  get "/showquiz", to: "quizzes#show"
  delete "/quiz_delete/:id", to: "quizzes#destroy"

  post "/newtext", to: "texts#create"
  get "/showtext", to:"texts#show"
  delete "/text_delete/:id", to: "texts#destroy"

  post "/newvideo", to: "videos#create"
  get "/showvideo", to: "videos#show"
  delete "/video_delete/:id", to: "videos#destroy"

  post "/newpicture", to: "pictures#create"
  get "/showpicture", to: "videos#show"
  delete "/picture_delete/:id", to: "pictures#destroy"

  post "/s3/direct_post", to: "s3_controller#direct_post"
 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
