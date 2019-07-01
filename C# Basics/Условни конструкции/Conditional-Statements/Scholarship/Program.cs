using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scholarship
{
    class Program
    {
        static void Main(string[] args)
        {
            double profit = double.Parse(Console.ReadLine());
            double success = double.Parse(Console.ReadLine());
            double minProfit = double.Parse(Console.ReadLine());

            double scholarshipSocial = minProfit * 0.35;
            double scholarshipExcelent = success * 25;

            if (success <= 4.50)
            {
                Console.WriteLine("You cannot get a scholarship!");
            }
            else if (success > 4.50 && success < 5.50 && profit >= minProfit)
            {
                Console.WriteLine("You cannot get a scholarship!");
            }

            else if (success > 4.50 && success < 5.50 && profit < minProfit)
            {
                Console.WriteLine("You get a Social scholarship {0} BGN", Math.Floor(scholarshipSocial));
            }

            else if (success >= 5.50 && success <= 6.00)
            {
                if (profit <= minProfit)
                {
                    if (scholarshipExcelent > scholarshipSocial)
                    {
                        Console.WriteLine("You get a scholarship for excellent results {0} BGN", Math.Floor(scholarshipExcelent));
                    }
                    else if (scholarshipExcelent < scholarshipSocial)
                    {
                        Console.WriteLine("You get a Social scholarship {0} BGN", Math.Floor(scholarshipSocial));
                    }
                    else if (scholarshipExcelent == scholarshipSocial)
                    {
                        Console.WriteLine("You get a scholarship for excellent results {0} BGN", Math.Floor(scholarshipExcelent));
                    }
                }
                else
                {
                    Console.WriteLine("You get a scholarship for excellent results {0} BGN", Math.Floor(scholarshipExcelent));
                }
            }
        }
    }
}
