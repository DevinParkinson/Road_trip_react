class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :city
      t.string :state
      t.string :zip
      t.belongs_to :locations, foreign_key: true

      t.timestamps
    end
  end
end
