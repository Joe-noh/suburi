defmodule TodoListTest do
  use ExUnit.Case

  @entries [
    %{date: {2015, 4, 11}, title: "Dentist"},
    %{date: {2015, 3, 23}, title: "Shopping"},
    %{date: {2015, 4, 11}, title: "Movies"}
  ]
  setup_all do
    todo_list = TodoList.new @entries

    {:ok, %{list: todo_list}}
  end

  test "query entries", c do
    todos = TodoList.entries(c.list, {2015, 4, 11})

    assert Enum.all?(todos, &(&1.date == {2015, 4, 11}))
  end

  test "add an entry", c do
    todos = TodoList.add_entry(c.list, %{date: {2015, 4, 20}, title: "Party"})

    assert TodoList.size(todos) == 4
  end

  test "update an entry", c do
    todos = TodoList.update_entry(c.list, 1, &Map.put(&1, :date, {2015, 5, 3}))

    assert length(TodoList.entries(todos, {2015, 5, 3})) == 1
  end

  test "delete an entry", c do
    todos = TodoList.delete_entry(c.list, 1)

    assert TodoList.size(todos) == 2
  end

  test "String.Char protocol", c do
    assert to_string(c.list) == "#TodoList(3)"
  end

  test "Collectable protocol", c do
    todos = for entry  <- @entries, into: TodoList.new, do: entry

    assert todos == c.list
  end
end
