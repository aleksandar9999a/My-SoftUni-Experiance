using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Left_and_Right_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int leftSum = 0;
            int rightSum = 0;
            int number = 0;

            for (int i = 0; i < n; i++)
            {
                number = int.Parse(Console.ReadLine());
                leftSum += number;
            }

            for (int i = 0; i < n; i++)
            {
                number = int.Parse(Console.ReadLine());
                rightSum += number;
            }

            if (leftSum == rightSum)
            {
                Console.WriteLine($"Yes, sum = {leftSum}");
            }
            else
            {
                int result = Math.Abs(leftSum - rightSum);
                Console.WriteLine($"No, diff = {result}");
            }
        }
    }
}
