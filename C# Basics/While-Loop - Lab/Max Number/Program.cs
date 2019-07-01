using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Max_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int count = 0;
            int max = int.MinValue;

            while (count < n)
            {
                int number = int.Parse(Console.ReadLine());
                count++;

                if (max < number)
                {
                    max = number;
                }
            }

            Console.WriteLine(max);
        }
    }
}
