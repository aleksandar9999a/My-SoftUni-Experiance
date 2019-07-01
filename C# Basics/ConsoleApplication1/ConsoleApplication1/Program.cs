using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int coun = 1;
            int sum = 1;

            while (coun <= num)
            {
                sum = sum * coun;
                coun++;
            }

            Console.WriteLine(sum);
        }
    }
}
