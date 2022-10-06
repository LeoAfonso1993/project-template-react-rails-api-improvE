class Picture < ApplicationRecord
  belongs_to :training

  has_attached_file :image, styles: {
    thumb: '300x300>',
    medium: '600x600>',
    large: '1000x1000>'
  }

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
