using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trainthetrainers
{
    class Program
    {

        static void Main(string[] args)
        {
            int jurycount = int.Parse(Console.ReadLine());
            string presentationName = Console.ReadLine();
            int presentationNameCount = 0;
            double finalassesment = 0;

            while (presentationName != "Finish")
            {

                double sumgrades = 0;
                for (int i = 1; i <= jurycount; i++)
                {
                    sumgrades += double.Parse(Console.ReadLine());
                }
                double averagegrade = sumgrades /= jurycount;
                finalassesment += sumgrades;
                presentationNameCount++;

                Console.WriteLine($"{presentationName} - {averagegrade:f2}.");

                presentationName = Console.ReadLine();
            }

            finalassesment /= presentationNameCount;
            Console.WriteLine($"Student's final assessment is {finalassesment:f2}.");
        }
    }
}
