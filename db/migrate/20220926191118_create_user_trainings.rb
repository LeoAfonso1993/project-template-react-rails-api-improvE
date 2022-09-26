class CreateUserTrainings < ActiveRecord::Migration[6.1]
  def change
    create_table :user_trainings do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :training, null: false, foreign_key: true
      t.timestamps
    end
  end
end
