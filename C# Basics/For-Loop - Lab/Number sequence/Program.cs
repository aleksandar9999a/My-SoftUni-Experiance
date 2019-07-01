using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Number_sequence
{
    class Program
    {
        static void Main(string[] args)
        {
            int minV = int.MaxValue;
            int maxV = int.MinValue;

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
                {
                    int num = int.Parse(Console.ReadLine());

                    if (num < minV)
                    {
                        minV = num;
                    }
                    if (num > maxV)
                    {
                        maxV = num;
                    }
                }

                Console.WriteLine($"Max number: {maxV}");
                Console.WriteLine($"Min number: {minV}");
        }
    }
}
