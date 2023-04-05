class Wine < ActiveRecord::Base
    belongs_to :user
    has_many :foods
end