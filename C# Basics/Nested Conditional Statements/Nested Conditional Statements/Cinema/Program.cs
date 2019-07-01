using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cinema
{
    class Program
    {
        static void Main(string[] args)
        {
            string type = Console.ReadLine().ToLower();
            int rows = int.Parse(Console.ReadLine());
            int col = int.Parse(Console.ReadLine());

            double people = rows * col;
            double price = 0;

            if (type == "premiere")
            {
                price = people * 12;
            }
            else if (type == "normal")
            {
                price = people * 7.50;
            }
            else if (type == "discount")
            {
                price = people * 5;
            }

            Console.WriteLine("{0:f2} leva", price);
        }
    }
}
