using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Birthday
{
    class Program
    {
        static void Main(string[] args)
        {
            double a = double.Parse(Console.ReadLine());
            double b = double.Parse(Console.ReadLine());
            double h = double.Parse(Console.ReadLine());
            double pro = double.Parse(Console.ReadLine());

            double volume = a * b * h;
            double liters = volume * 0.001;
            pro = pro * 0.01;
            double realLiters = liters * (1 - pro);

            Console.WriteLine("{0:f3}", realLiters);
        }
    }
}
