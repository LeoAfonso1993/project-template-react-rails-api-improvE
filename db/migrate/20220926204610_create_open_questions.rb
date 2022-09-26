class CreateOpenQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :open_questions do |t|
      t.string :question
      t.string :answer
      t.belongs_to :training, null: false, foreign_key: true
      t.timestamps
    end
  end
end
