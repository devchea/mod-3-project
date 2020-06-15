class Challenger < ApplicationRecord
  has_many :matches
  has_many :fighters, through: :matches
  has_many :users, through: :matches
end
