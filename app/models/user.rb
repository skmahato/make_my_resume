class User < ApplicationRecord
  has_secure_password

  VALID_EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i.freeze

  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: VALID_EMAIL_REGEX }
end
