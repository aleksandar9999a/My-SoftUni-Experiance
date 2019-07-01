using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Three_brothers
{
    class Program
    {
        static void Main(string[] args)
        {
            //Input data
            double cleanTimeA = double.Parse(Console.ReadLine());
            double cleanTimeB = double.Parse(Console.ReadLine());
            double cleanTimeC = double.Parse(Console.ReadLine());

            double fishTime = double.Parse(Console.ReadLine());

            //CleaningTime

            double cleaningTime = 1 / (1 / cleanTimeA + 1 / cleanTimeB + 1 / cleanTimeC);
            double cleaningTimeFull = cleaningTime * 1.15;

            if (cleaningTimeFull <= fishTime)
            {
                Console.WriteLine("Cleaning time: {0:f2}", cleaningTimeFull);
                Console.WriteLine("Yes, there is a surprise - time left -> {0:f0} hours.", Math.Floor(fishTime - cleaningTimeFull));
            }
            else
            {
                Console.WriteLine("Cleaning time: {0:f2}", cleaningTimeFull);
                Console.WriteLine("No, there isn't a surprise - shortage of time -> {0:f0} hours.", Math.Ceiling(Math.Abs(fishTime - cleaningTimeFull)));
            }
        }
    }
}
