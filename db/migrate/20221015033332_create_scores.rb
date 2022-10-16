class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.string :user_name
      t.integer :number_of_questions
      t.integer :points
      t.boolean :completed
      t.belongs_to :training, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
