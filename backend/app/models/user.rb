class User < ApplicationRecord
  has_many :matches
  has_many :fighters, through: :matches
end
