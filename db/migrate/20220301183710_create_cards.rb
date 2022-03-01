class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.references :user, null: false, foreign_key: true
      t.references :template, null: false, foreign_key: true
      t.string :receiver
      t.text :message
      t.string :salutation
      t.string :closing

      t.timestamps
    end
  end
end
