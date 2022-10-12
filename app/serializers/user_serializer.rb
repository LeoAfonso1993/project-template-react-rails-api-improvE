class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :password_confirmation, :is_admin, :company_id
end
