import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    success: "95%",
    time: "5m",
    type: "Easy",

    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}`,
      cpp: `#include <iostream>
using namespace std;

int main()
{
   

    return 0;
}
`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
    java: `public class Main
    {
      public static void main(String[] args) {
      
      }
    }`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ nums[i] ≤ 109",
      "-109 ≤ target ≤ 109",
      "Only one valid answer exists.",
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    success: "90%",
    time: "10m",
    type: "Easy",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}`,
      cpp: `#include <iostream>
using namespace std;

int main()
{
   

    return 0;
}
`,

      python: `def reverse_string(s):
    # Write your solution here
    pass`,
    java: `public class Main
    {
      public static void main(String[] args) {
      
      }
    }`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    success: "85%",
    time: "15m",
    type: "Medium",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation:
          "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
  
}`,
cpp: `#include <iostream>
using namespace std;

int main()
{
   

    return 0;
}
`,
      python: `def is_palindrome(x):
    # Write your solution here
    pass`,
    java: `public class Main
    {
      public static void main(String[] args) {
      
      }
    }`,
    },
  },
  {
    id: "arrayDP",
    title: "Minimum Cost to Make Array Equalindromic",
    success: "70%",
    time: "1h 30m",
    type: "Hard",

    description: `You are given a 0-indexed integer array nums having length n.

You are allowed to perform a special move any number of times (including zero) on nums. In one special move you perform the following steps in order:

Choose an index i in the range [0, n - 1], and a positive integer x.
Add |nums[i] - x| to the total cost.
Change the value of nums[i] to x.
A palindromic number is a positive integer that remains the same when its digits are reversed. For example, 121, 2552 and 65756 are palindromic numbers whereas 24, 46, 235 are not palindromic numbers.

An array is considered equalindromic if all the elements in the array are equal to an integer y, where y is a palindromic number less than 109.

Return an integer denoting the minimum possible total cost to make nums equalindromic by performing any number of special moves.

 `,
    examples: [
      {
        input: "nums = [1,2,3,4,5]",
        output: " 6",
        explanation: ` We can make the array equalindromic by changing all elements to 3 which is a palindromic 
number. The cost of changing the array to [3,3,3,3,3] using 4 special moves is given by |1 - 3| + |2 - 3| + |4 - 3| + |5 - 3| = 6.
It can be shown that changing all elements to any palindromic number other than 3 cannot be achieved at a 
lower cost.`,
      },
      {
        input: "[10,12,13,14,15]",
        output: "11",
        explanation: `We can make the array equalindromic by changing all elements to 11 which is a palindromic 
number. The cost of changing the array to [11,11,11,11,11] using 5 special moves is given by
|10 - 11| + |12 - 11| + |13 - 11| + |14 - 11| + |15 - 11| = 11.
It can be shown that changing all elements to any palindromic number other than 11 cannot be achieved at
a lower cost.`,
      },
    ],
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    
};`,
cpp: `#include <iostream>
using namespace std;

int main()
{
   

    return 0;
}
`,
      python: `class Solution(object):
    def minimumCost(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        `,
      java: `public class Main
{
	public static void main(String[] args) {
	
	}
}`,
    },
    constraints: ["1 <= n <= 105", "1 <= nums[i] <= 109"],
  },
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "cpp", name: "C++", icon: "/cpp.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  success?: string;
  time?: string;
  type?: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    cpp: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
