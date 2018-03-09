class Location < ApplicationRecord
  belongs_to :trips
    has_one :addresses, dependent: destroy
end
