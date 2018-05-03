class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.int :value
      t.int :userId

      t.timestamps
    end
  end
end