using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classwork
{
    class Program
    {
        static void Main(string[] args)
        {
            double inch = double.Parse(Console.ReadLine());
            double sm = inch * 2.54;
            Console.WriteLine(String.Format("{0:0.00}", sm));
        }
    }
}
