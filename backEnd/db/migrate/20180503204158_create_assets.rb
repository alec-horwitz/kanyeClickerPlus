class CreateAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :assets do |t|
      t.int :userId
      t.int :yeezy
      t.int :grammy
      t.int :persianRug

      t.timestamps
    end
  end
end
