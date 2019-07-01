using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Divide_without_remainder
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            double counterP1 = 0; // %2
            double counterP2 = 0; // %3
            double counterP3 = 0; // %4

            for (int i = 0; i < n; i++)
            {
                int number = int.Parse(Console.ReadLine());

                if (number % 2 == 0)
                {
                    counterP1++;
                }
                if (number % 3 == 0)
                {
                    counterP2++;
                }
                if (number % 4 == 0)
                {
                    counterP3++;
                }
            }

            Console.WriteLine($"{counterP1 / n * 100:f2}%");
            Console.WriteLine($"{counterP2 / n * 100:f2}%");
            Console.WriteLine($"{counterP3 / n * 100:f2}%");
        }
    }
}
