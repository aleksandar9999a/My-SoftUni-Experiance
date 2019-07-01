using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Coins
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal changeTarget = decimal.Parse(Console.ReadLine()) * 100;
            decimal currentChange = 0;
            int counter = 0;

            while (currentChange < changeTarget)
            {
                if (currentChange + 200 <= changeTarget )
                {
                    currentChange += 200;
                    counter++;
                }
                else if (currentChange + 100 <= changeTarget)
                {
                    currentChange += 100;
                    counter++;
                }
                else if (currentChange + 50 <= changeTarget)
                {
                    currentChange += 50;
                    counter++;
                }
                else if (currentChange + 20 <= changeTarget)
                {
                    currentChange += 20;
                    counter++;
                }
                else if (currentChange + 10 <= changeTarget)
                {
                    currentChange += 10;
                    counter++;
                }
                else if (currentChange + 5 <= changeTarget)
                {
                    currentChange += 5;
                    counter++;
                }
                else if (currentChange + 2 <= changeTarget)
                {
                    currentChange += 2;
                    counter++;
                }
                else if (currentChange + 1 <= changeTarget)
                {
                    currentChange += 1;
                    counter++;
                }
            }
            Console.WriteLine(counter);
        }
    }
}
