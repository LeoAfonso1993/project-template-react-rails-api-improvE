class PictureSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :training_id, :url, :created_at

  def training_id
    object.training_id.to_i
  end
end
