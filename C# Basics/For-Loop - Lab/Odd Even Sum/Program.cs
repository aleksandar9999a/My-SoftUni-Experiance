using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Odd_Even_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int oddPosition = 0;
            int evenPosition = 0;

            for (int i = 0; i < n; i++)
            {
                int number = int.Parse(Console.ReadLine());

                if (i % 2 == 0)
                {
                    oddPosition += number;
                }
                else
                {
                    evenPosition += number;
                }
            }

            if (oddPosition == evenPosition)
            {
                Console.WriteLine("Yes");
                Console.WriteLine($"Sum = {oddPosition}");
            }
            else
            {
                int diff = Math.Abs(evenPosition - oddPosition);
                Console.WriteLine("No");
                Console.WriteLine($"Diff = {diff}");
            }
        }
    }
}
