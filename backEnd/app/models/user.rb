class User < ApplicationRecord
  has_secure_password
  has_one :assest
  has_one :score
end
