class CreateStatuses < ActiveRecord::Migration[6.0]
  def change
    create_table :statuses do |t|
      t.integer :speed
      t.integer :stamina
      t.integer :power
      t.integer :guts
      t.integer :wise
      t.timestamps
    end
  end
end
