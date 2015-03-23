defmodule CsvImporterTest do
  use ExUnit.Case

  test "import CSV file" do
    todos = Path.expand("todos.csv", __DIR__) |> TodoList.CsvImporter.import

    assert TodoList.size(todos) == 3
  end
end
