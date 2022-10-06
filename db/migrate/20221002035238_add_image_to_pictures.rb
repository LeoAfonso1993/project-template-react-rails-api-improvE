class AddImageToPictures < ActiveRecord::Migration[6.1]
  def self.up
    add_attachment :pictures, :image
  end

  def self.down
    remove_attachment :pictures, :image
  end
end
