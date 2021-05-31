class HeroSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :name, :attack, :defense, :level, :experience, :description
  # belongs_to :user
end
