using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation_pt._2
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            double count = 1;
            double sum = 0;
            double excluded = 0;
            bool isExcluded = false;

            while (count <= 12)
            {
                double succes = double.Parse(Console.ReadLine());
                
                if (succes < 4)
                {
                    excluded++;
                }
                else if (succes >= 4.00)
                {
                    sum += succes;
                    count++;
                }

                if (excluded >=2)
                {
                    isExcluded = true;
                    break;
                }


            }

            if (isExcluded == false)
            {
                double avarege = sum / 12;
                Console.WriteLine($"{name} graduated. Average grade: {avarege:f2}");
            }
            else
            {
                Console.WriteLine($"{name} has been excluded at {count} grade");
            }
        }
    }
}
