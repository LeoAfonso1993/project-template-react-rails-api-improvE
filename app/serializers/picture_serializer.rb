class PictureSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :training_id, :image

  def training_id
    object.training_id.to_i
  end
end
