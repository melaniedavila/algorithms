def reverse(string)
  return string if string.length <= 1
  string[-1] + reverse(string[0..-2])
end

def sum(arr)
  return 0 if arr.empty?
  sum(arr[0..-2]) + arr.last
end
