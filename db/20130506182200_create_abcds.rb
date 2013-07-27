class CreateAbcds < ActiveRecord::Migration
  def change
    create_table :abcds do |t|
        t.string "first_name"
        t.string "last_name"
        t.string "email"
        t.string "password"
      t.timestamps
    end
  end
end
