using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {

                int a = int.Parse(Console.ReadLine());

                while (a < 1 || a > 100)
                {
                    Console.WriteLine("Invalid number");
                    a = int.Parse(Console.ReadLine());
                }
                Console.WriteLine("The number is: " + a);
            }
        }
    }
}
