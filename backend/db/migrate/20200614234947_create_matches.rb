class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.integer :fighter_id
      
      t.integer :user_id
      t.string :venue
      t.string :comment

      t.timestamps
    end
  end
end
