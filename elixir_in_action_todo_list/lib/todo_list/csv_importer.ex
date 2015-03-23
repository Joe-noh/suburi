defmodule TodoList.CsvImporter do
  def import(path) do
    path
    |> File.stream!
    |> Stream.map(&String.strip/1)
    |> Stream.map(&make_map/1)
    |> Enum.to_list
    |> TodoList.new
  end

  def make_map(line) do
    [date, title] = String.split(line, ",")
    date = date |> String.split("/") |> List.to_tuple

    %{date: date, title: title}
  end
end
