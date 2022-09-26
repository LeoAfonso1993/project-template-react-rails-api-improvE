class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.string :question
      t.string :correct_answer
      t.string :option_2
      t.string :option_3
      t.string :option_4
      t.belongs_to :training, null: false, foreign_key: true
      t.timestamps
    end
  end
end
