using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Histogram
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            double counterP1 = 0; // under 200
            double counterP2 = 0; // 200 - 399
            double counterP3 = 0; // 400 - 599
            double counterP4 = 0; // 600 - 799
            double counterP5 = 0; // >= 800

            for (int i = 0; i < n; i++)
            {
                int number = int.Parse(Console.ReadLine());

                if (number < 200)
                {
                    counterP1++;
                }
                else if (number >= 200 && number < 400)
                {
                    counterP2++;
                }
                else if (number >= 400 && number < 600)
                {
                    counterP3++;
                }
                else if (number >= 600 && number < 800)
                {
                    counterP4++;
                }
                else if (number >= 800)
                {
                    counterP5++;
                }
            }

            Console.WriteLine($"{counterP1 / n * 100:f2}%");
            Console.WriteLine($"{counterP2 / n * 100:f2}%");
            Console.WriteLine($"{counterP3 / n * 100:f2}%");
            Console.WriteLine($"{counterP4 / n * 100:f2}%");
            Console.WriteLine($"{counterP5 / n * 100:f2}%");
        }
    }
}
