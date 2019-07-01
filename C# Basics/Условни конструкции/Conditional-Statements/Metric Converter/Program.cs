using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metric_Converter
{
    class Program
    {
        static void Main(string[] args)
        {
            double value = double.Parse(Console.ReadLine());
            string inputMetric = Console.ReadLine();
            string outputMetric = Console.ReadLine();

            if (inputMetric == "mm")
            {
                value = value / 1000;
            }
            else if (inputMetric == "cm")
            {
                value = value / 100;
            }
            else if (inputMetric == "m")
            {
                value = value / 1;
            }

            if (outputMetric == "mm")
            {
                value = value * 1000;
            }
            else if (outputMetric == "cm")
            {
                value = value * 100;
            }
            else if (outputMetric == "m")
            {
                value = value * 1;
            }

            Console.WriteLine("{0:f3}", value);
        }
    }
}
