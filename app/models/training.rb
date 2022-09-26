class Training < ApplicationRecord
    belongs_to :category
    has_many :users, through: :user_trainings
end
