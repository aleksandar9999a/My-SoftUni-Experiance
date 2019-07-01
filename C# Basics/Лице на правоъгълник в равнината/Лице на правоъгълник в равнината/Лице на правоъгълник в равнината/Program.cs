﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Лице_на_правоъгълник_в_равнината
{
    class Program
    {
        static void Main(string[] args)
        {
            double x1 = double.Parse(Console.ReadLine());
            double y1 = double.Parse(Console.ReadLine());
            double x2 = double.Parse(Console.ReadLine());
            double y2 = double.Parse(Console.ReadLine());

            double length = Math.Abs(x1-x2);
            double width = Math.Abs(y1 - y2);

            double area = length * width;
            double perimeter = 2 * (length + width);

            Console.WriteLine(String.Format("{0:0.00}", area));
            Console.WriteLine(String.Format("{0:0.00}", perimeter));
        }
    }
}
