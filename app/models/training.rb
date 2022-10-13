class Training < ApplicationRecord
    belongs_to :category
    has_many :user_trainings
    has_many :users, through: :user_trainings
    has_many :quizzes, dependent: :destroy
    has_many :texts, dependent: :destroy
    has_many :videos, dependent: :destroy
    has_many :pictures, dependent: :destroy

end
