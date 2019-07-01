using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sum_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int b = 0;

            for (int i = int.Parse(Console.ReadLine()); i != 0; i-- )
            {
                int a = int.Parse(Console.ReadLine());
                b += a;

            }

            Console.WriteLine(b);
        }
    }
}
