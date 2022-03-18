class Worker < ApplicationRecord
  has_many :services, dependent: :destroy

  validates :fname, :lname, :phone, presence: true
end
