class Wine < ActiveRecord::Base
    has_many :foods
end