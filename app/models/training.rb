class Training < ApplicationRecord
    belongs_to :category
    has_many :users, through: :user_trainings
    has_many :quizzes
    has_many :texts
    has_many :videos
    has_many :pictures

end
