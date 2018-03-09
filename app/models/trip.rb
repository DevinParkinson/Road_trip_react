class Trip < ApplicationRecord
  has_many :locations, dependent: destroy
end
