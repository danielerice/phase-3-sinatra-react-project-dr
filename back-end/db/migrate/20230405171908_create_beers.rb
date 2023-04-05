class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.integer :rating
      t.text :notes
      t.integer :user_id
    end
  end
end
