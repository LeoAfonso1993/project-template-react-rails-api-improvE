# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_26_205224) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "open_questions", force: :cascade do |t|
    t.string "question"
    t.string "answer"
    t.bigint "training_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["training_id"], name: "index_open_questions_on_training_id"
  end

  create_table "quizzes", force: :cascade do |t|
    t.string "question"
    t.string "correct_answer"
    t.string "option_2"
    t.string "option_3"
    t.string "option_4"
    t.bigint "training_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["training_id"], name: "index_quizzes_on_training_id"
  end

  create_table "texts", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.bigint "training_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["training_id"], name: "index_texts_on_training_id"
  end

  create_table "trainings", force: :cascade do |t|
    t.string "name"
    t.bigint "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_trainings_on_category_id"
  end

  create_table "user_trainings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "training_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["training_id"], name: "index_user_trainings_on_training_id"
    t.index ["user_id"], name: "index_user_trainings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.boolean "is_admin"
    t.bigint "company_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_users_on_company_id"
  end

  create_table "videos", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "url"
    t.bigint "training_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["training_id"], name: "index_videos_on_training_id"
  end

  add_foreign_key "open_questions", "trainings"
  add_foreign_key "quizzes", "trainings"
  add_foreign_key "texts", "trainings"
  add_foreign_key "trainings", "categories"
  add_foreign_key "user_trainings", "trainings"
  add_foreign_key "user_trainings", "users"
  add_foreign_key "users", "companies"
  add_foreign_key "videos", "trainings"
end
