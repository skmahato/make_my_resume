class CreateResumes < ActiveRecord::Migration[5.2]
  def change
    create_table :resumes do |t|
      t.string :title, null: false
      t.string :description
      t.integer :user_id, null: false, index: true

      t.timestamps
    end
  end
end
