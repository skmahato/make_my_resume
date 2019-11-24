class CreateResumes < ActiveRecord::Migration[5.2]
  def change
    create_table :resumes do |t|
      t.string :title, null: false

      t.timestamps
    end
  end
end
