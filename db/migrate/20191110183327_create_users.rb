class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email,              null: false, default: "", unique: true, index: true
      t.string :encrypted_password, null: false, default: ""
      t.string   :reset_password_token, index: true
      t.datetime :reset_password_sent_at
      t.datetime :remember_created_at

      t.timestamps
    end
  end
end
