class User < ActiveRecord::Base
    has_many :wines
    has_many :foods, through: :wines
end