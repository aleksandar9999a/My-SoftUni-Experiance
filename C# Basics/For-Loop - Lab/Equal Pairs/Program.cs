using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Equal_Pairs
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int sum = 0;
            int sum1 = 0;

            for (int i = 1; i <= n; i++)
            {
                sum1 = sum;
                int number = int.Parse(Console.ReadLine());
                int number1 = int.Parse(Console.ReadLine());
                sum = number + number1;
            }

            if (sum == sum1 || n == 1)
            {
                Console.WriteLine($"Yes, value={sum}");
            }
            else
            {
                Console.WriteLine($"No, maxdiff={Math.Abs(sum - sum1)}");
            }
        }
    }
}
