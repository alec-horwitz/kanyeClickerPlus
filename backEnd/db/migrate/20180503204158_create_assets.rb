class CreateAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :assets do |t|
      t.integer :userId
      t.integer :yeezy
      t.integer :grammy
      t.integer :persianRug

      t.timestamps
    end
  end
end
