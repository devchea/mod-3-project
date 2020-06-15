class CreateChallengers < ActiveRecord::Migration[6.0]
  def change
    create_table :challengers do |t|
      t.string :first_name
      t.string :last_name
      t.integer :weight
      t.integer :height
      t.boolean :champion_status

      t.timestamps
    end
  end
end
