class User < ApplicationRecord
    has_many :user_heros
    has_many :heros, through: :user_heros
end
