defmodule TodoList do
  defstruct auto_id: 1, entries: HashDict.new

  def new do
    %TodoList{}
  end

  def new(entries) do
    Enum.reduce entries, %TodoList{}, &add_entry(&2, &1)
  end

  def entries(%TodoList{entries: entries}, date) do
    entries
    |> Enum.filter(fn {_, entry} -> entry.date == date end)
    |> Enum.map(fn {_, entry} -> entry end)
  end

  def size(%TodoList{entries: entries}) do
    HashDict.size(entries)
  end

  def add_entry(%TodoList{auto_id: id, entries: entries} = todo_list, entry) do
    new_entry = Map.put(entry, :id, id)
    new_entries = HashDict.put(entries, id, new_entry)

    %TodoList{todo_list | auto_id: id+1, entries: new_entries}
  end

  def update_entry(%TodoList{entries: entries} = todo_list, id, updater) do
    case HashDict.get(entries, id) do
      nil -> todo_list
      _ ->
        new_entries = HashDict.update!(entries, id, updater)
        %TodoList{todo_list | entries: new_entries}
    end
  end

  def delete_entry(%TodoList{entries: entries} = todo_list, id) do
    {_, new_entries} = HashDict.pop(entries, id)
    %TodoList{todo_list | entries: new_entries}
  end
end

defimpl String.Chars, for: TodoList do
  def to_string(todo_list) do
    "#TodoList(#{TodoList.size(todo_list)})"
  end
end

defimpl Collectable, for: TodoList do
  def into(todo_list) do
    {todo_list, &do_into/2}
  end

  defp do_into(todo_list, {:cont, entry}) do
    TodoList.add_entry(todo_list, entry)
  end

  defp do_into(todo_list, :done), do: todo_list
  defp do_into(todo_list, :halt), do: :ok
end
