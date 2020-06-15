class Fighter < ApplicationRecord
  has_many :matches
  has_many :challengers, through: :matches
  has_many :users, through: :matches
end
