class CreateUserHeros < ActiveRecord::Migration[6.1]
  def change
    create_table :user_heros do |t|
      t.integer :user_id
      t.integer :hero_id

      t.timestamps
    end
  end
end
