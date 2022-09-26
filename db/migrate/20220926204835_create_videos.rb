class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :description
      t.string :url
      t.belongs_to :training, null: false, foreign_key: true
      t.timestamps
    end
  end
end
