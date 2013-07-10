class AddLastEditor < ActiveRecord::Migration
  def change
    add_column :documents, :last_editor, :string
  end
end
