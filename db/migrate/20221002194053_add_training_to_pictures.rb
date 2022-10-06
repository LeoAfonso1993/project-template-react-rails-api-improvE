class AddTrainingToPictures < ActiveRecord::Migration[6.1]
  def change
    add_reference :pictures, :training, null: false, foreign_key: true
  end
end
