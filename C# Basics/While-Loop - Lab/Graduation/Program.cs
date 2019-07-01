using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graduation
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            double count = 1;
            double sum = 0;

            while (count <= 12)
            {
                double succes = double.Parse(Console.ReadLine());
                if (succes >= 4.00)
                {
                    sum += succes;
                    count++;
                }
            }

            double avarege = sum / 12;
            Console.WriteLine($"{name} graduated. Average grade: {avarege:f2}");
        }
    }
}
