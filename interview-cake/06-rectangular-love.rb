# rect1 = {
#
#     # bottom-left corner
#     'left_x' => 1,
#     'bottom_y' => 5,
#
#     # width and height
#     'width' => 5,
#     'height' => 4,
#
# }

def rectangular_love(rect1, rect2)
  intersection = {}

  # calculate right_x and top_y for both rectangles
  rect1["right_x"] = rect1["left_x"] + rect1["width"]
  rect2["right_x"] = rect2["left_x"] + rect2["width"]
  rect1["top_y"] = rect1["bottom_y"] + rect1["height"]
  rect2["top_y"] = rect2["bottom_y"] + rect2["height"]

  # calculate the intersection's left_x and bottom_y
  intersection["left_x"] = [rect1["left_x"], rect2["left_x"]].max
  intersection["bottom_y"] = [rect1["bottom_y"], rect2["bottom_y"]].max

  # calculate the intersection's width
  min_right_x = [rect1["right_x"], rect2["right_x"]].min
  intersection["width"] = (min_right_x - intersection["left_x"])

  # calculate the intersection's height
  min_top_y = [rect1["top_y"], rect2["top_y"]].min
  max_bottom_y = [rect1["bottom_y"], rect2["bottom_y"]].max
  intersection["height"] = (min_top_y - max_bottom_y)

  if intersection.values.any? { |param| param < 0 }
    raise "no intersection"
  else
    intersection
  end
end
