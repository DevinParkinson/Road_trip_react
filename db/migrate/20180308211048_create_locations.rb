class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :belongs_to
      t.string :trip

      t.timestamps
    end
  end
end
