class Comment < ApplicationRecord
  belongs_to :service

  validates :subject, :body, presence: true
  validates :body, length: { in: 1...50 }
end
