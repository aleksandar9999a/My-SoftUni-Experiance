using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Зала_за_танци
{
    class Program
    {
        static void Main(string[] args)
        {
            double hallL = double.Parse(Console.ReadLine());
            double hallW = double.Parse(Console.ReadLine());
            double wardrobe = double.Parse(Console.ReadLine());

            double hallArea = (hallL * 100) * (hallW * 100);
            double wardrobeArea = (wardrobe * 100) * (wardrobe * 100);
            double bench = hallArea / 10;

            double hallFree = hallArea - wardrobeArea - bench;
            double people = hallFree / (40 + 7000);

            Console.WriteLine(Math.Floor(people));
        }
    }
}
