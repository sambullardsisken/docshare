class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.text :title
      t.text :body
      t.integer :creator_id

      t.timestamps
    end
  end
end
