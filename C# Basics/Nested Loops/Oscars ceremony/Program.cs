using System;

namespace Oscars_ceremony
{
    class Program
    {
        static void Main(string[] args)
        {
            int money = int.Parse(Console.ReadLine());

            double statues = money - money * 0.3;
            double catering = statues - statues * 0.15;
            double music = catering / 2;

            Console.WriteLine($"{money + statues + catering + music:F2}");
        }
    }
}
