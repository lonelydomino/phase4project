class CreateEnemies < ActiveRecord::Migration[6.1]
  def change
    create_table :enemies do |t|
      t.string :name
      t.string :hp
      t.string :desc
      t.string :attack
      t.string :def

      t.timestamps
    end
  end
end
