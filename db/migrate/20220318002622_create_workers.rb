class CreateWorkers < ActiveRecord::Migration[7.0]
  def change
    create_table :workers do |t|
      t.string :fname
      t.string :lname
      t.string :phone

      t.timestamps
    end
  end
end
