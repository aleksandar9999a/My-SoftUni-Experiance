using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Area_of_Figures
{
    class Program
    {
        static void Main(string[] args)
        {
            string figureType = Console.ReadLine();
            double area = 0.00;

            switch(figureType)
            {
                case "square":
                    {
                        double a = double.Parse(Console.ReadLine());
                        area = a * a;
                        break;
                    }

                case "rectangle":
                    {
                        double a = double.Parse(Console.ReadLine());
                        double b = double.Parse(Console.ReadLine());
                        area = a * b;
                        break;
                    }

                case "circle":
                    {
                        double a = double.Parse(Console.ReadLine());
                        area = a * a * Math.PI;
                        break;
                    }

                case "triangle":
                    {
                        double a = double.Parse(Console.ReadLine());
                        double b = double.Parse(Console.ReadLine());
                        area = (a * b) / 2;
                        break;
                    }
            }

            Console.WriteLine($"{area:F3}");
        }
    }
}
