using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Half_Sum_Element
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int sum = 0;
            int why = int.MinValue;

            for (int i = 0; i < n; i++)
            {
                int number = int.Parse(Console.ReadLine());
                sum += number;

                if (number > why)
                {
                    why = number;
                }
            }

            sum -= why;
            int diff = Math.Abs(sum - why);

            if (why == sum)
            {
                Console.WriteLine("Yes");
                Console.WriteLine($"Sum = {why}");
            }
            else
            {
                Console.WriteLine("No");
                Console.WriteLine($"Diff = {diff}");
            }
        }
    }
}
