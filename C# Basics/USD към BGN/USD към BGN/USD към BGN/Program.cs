using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace USD_към_BGN
{
    class Program
    {
        static void Main(string[] args)
        {
            double usd = double.Parse(Console.ReadLine());
            double bgn = usd * 1.79549;
            Console.WriteLine(String.Format("{0:0.00}", bgn));
        }
    }
}
