# Find the 2nd largest integer in array If the array has no 2nd largest integer then return nil.
# Reject all non integers elements and then find the 2nd largest integer in array
#
# find_2nd_largest([1,2,3]) => 2
#
# find_2nd_largest([1,1,1,1,1]) => nil because all elements are same.
# Largest no. is 1. and there is no 2nd largest no.
#
# find_2nd_largest([1,'a','2',3,3,4,5,'b']) => 4 as after rejecting non integers
# array will be [1,3,3,4,5] Largest no. is 5. and 2nd largest is 4.
#
# Return nil if there is no 2nd largest integer. Take care of big numbers as well

# http://www.codewars.com/kata/55a58505cb237a076100004a/train/ruby

def find_2nd_largest(arr)
  normArr = arr.reject {|num| num.is_a? String}
  highest = normArr[0]
  secondHighest = normArr[1]

  normArr.each do |num|
    if num > highest
      secondHighest = highest
      highest = num
    elsif num < highest && num > secondHighest
      secondHighest = num
    end
  end
  secondHighest === highest ? nil : secondHighest
end




p find_2nd_largest([1,2,3,'4',5,6,7])
p find_2nd_largest([1,1,1])
