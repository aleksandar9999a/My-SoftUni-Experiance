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
            int maxNUmber = int.MinValue;
            int minNumber = int.MaxValue;

            string input = Console.ReadLine();

            while (input != "END")
            {
                int num = int.Parse(input);
                if (num < minNumber)
                {
                    minNumber = num;
                }

                if (num > maxNUmber)
                {
                    maxNUmber = num;
                }

                input = Console.ReadLine();
            }

            Console.WriteLine($"Max number: {maxNUmber}");
            Console.WriteLine($"Min number: {minNumber}");
        }
    }
}
