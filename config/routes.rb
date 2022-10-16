Rails.application.routes.draw do
  get 's3/direct_post'
  resources :trainings

  get "/allusers", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/deleteuser/:id", to: "users#destroy"
  patch "/upedateuserpermission/:id", to:"users#update"
  get "/traininguser/:id", to:"users#show_training"
  
  
  get "/alltrainings", to: "trainings#index"
  get "/allcategories", to: "categories#index"
  get "/show_items_quiz/:id", to: "trainings#show_items_quiz"
  get "/show_items_text/:id", to: "trainings#show_items_text"
  get "/show_items_video/:id", to: "trainings#show_items_video"
  get "/show_items_picture/:id", to: "trainings#show_items_picture"
  get "/show_users/:id", to: "trainings#show_users"
  get "/show_all_trainings/:id", to: "trainings#show_all_trainings"
  
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

  post "/usertraining", to: "user_trainings#create"
  get "/allusertraining", to: "user_trainings#index"
  get "/showusertraining/:id", to: "user_trainings#show"
  delete "/deleteassignment/:id", to: "user_trainings#destroy"

  get "/allscores", to: "scores#index"
  post "/newscore", to: "scores#create"


  
 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
